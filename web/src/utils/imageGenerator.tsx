import html2canvas from "html2canvas";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MemoShareCard from "@/components/MemoShareCard";
import { Memo } from "@/types/proto/api/v1/memo_service";
import { ShareImageOptions, ShareImageResult } from "@/types/share";

/**
 * 强制移除所有元素的背景色，避免html2canvas解析oklch颜色
 * 只保留根元素的白色背景
 */
function forceRemoveBackgrounds(element: HTMLElement) {
  const elements = Array.from(element.querySelectorAll("*")) as HTMLElement[];

  elements.forEach((el) => {
    const computedStyle = window.getComputedStyle(el);
    const bgColor = computedStyle.backgroundColor;

    // 如果背景色不是透明或白色，强制设为透明
    if (
      bgColor &&
      bgColor !== "transparent" &&
      bgColor !== "rgba(0, 0, 0, 0)" &&
      bgColor !== "rgb(255, 255, 255)" &&
      bgColor !== "rgba(255, 255, 255, 1)" &&
      bgColor !== "#ffffff" &&
      bgColor !== "#fff"
    ) {
      el.style.setProperty("background-color", "transparent", "important");
    }
  });
}

/**
 * 转换元素及其子元素中的颜色为html2canvas支持的格式
 * html2canvas不支持oklch等新颜色格式，需要转换为rgb/rgba
 */
function convertColorsForHtml2Canvas(element: HTMLElement) {
  const elements = [element, ...Array.from(element.querySelectorAll("*"))];

  elements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const computedStyle = window.getComputedStyle(htmlEl);

    // 需要转换的颜色属性（使用CSS属性名）
    const colorProps = [
      { css: "color", js: "color" },
      { css: "background-color", js: "backgroundColor" },
      { css: "border-color", js: "borderColor" },
      { css: "border-top-color", js: "borderTopColor" },
      { css: "border-right-color", js: "borderRightColor" },
      { css: "border-bottom-color", js: "borderBottomColor" },
      { css: "border-left-color", js: "borderLeftColor" },
      { css: "outline-color", js: "outlineColor" },
      { css: "text-decoration-color", js: "textDecorationColor" },
      { css: "fill", js: "fill" },
      { css: "stroke", js: "stroke" },
    ];

    colorProps.forEach(({ css, js }) => {
      const value = computedStyle.getPropertyValue(css);
      // 检查是否包含不支持的颜色格式
      if (
        value &&
        value !== "transparent" &&
        value !== "none" &&
        (value.includes("oklch") ||
          value.includes("oklab") ||
          value.includes("color(") ||
          value.includes("color-mix") ||
          value.includes("lch") ||
          value.includes("lab"))
      ) {
        // 使用JS属性读取计算后的颜色（浏览器自动转换为rgb/rgba）
        const computedColor = (computedStyle as any)[js];
        if (computedColor && computedColor !== value) {
          // 使用CSS属性名设置
          htmlEl.style.setProperty(css, computedColor, "important");
        }
      }
    });
  });
}

/**
 * 生成Memo分享图片
 *
 * 使用html2canvas将Memo内容转换为图片
 *
 * @param memo - Memo对象
 * @param options - 图片生成选项
 * @returns Promise<ShareImageResult> - 包含图片URL、尺寸等信息
 *
 * @example
 * ```typescript
 * const { imageUrl, width, height } = await generateMemoImage(memo);
 * // imageUrl 可以用于 <img src={imageUrl} />
 * ```
 */
export async function generateMemoImage(memo: Memo, options: Partial<ShareImageOptions> = {}): Promise<ShareImageResult> {
  const { maxWidth = 800, scale = 2, backgroundColor = "#ffffff" } = options;

  // 1. 创建临时容器（屏幕外）
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = `${maxWidth}px`;
  document.body.appendChild(container);

  try {
    // 2. 渲染 MemoShareCard
    const root = createRoot(container);
    await new Promise<void>((resolve) => {
      root.render(
        <BrowserRouter>
          <MemoShareCard memo={memo} onRendered={() => resolve()} />
        </BrowserRouter>,
      );
    });

    // 等待额外时间确保所有内容加载完成（包括图片）
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 2.5. 转换不支持的颜色格式（oklch等）为rgb
    const element = container.firstChild as HTMLElement;
    if (element) {
      convertColorsForHtml2Canvas(element);
      // 额外强制清除所有背景色，避免html2canvas解析失败
      forceRemoveBackgrounds(element);

      // 重写代码块结构 - 简化复杂的嵌套，避免 oklch 颜色
      // 查找所有代码块容器 (div.bg-card 包含 pre > code 的结构)
      const codeBlocks = element.querySelectorAll("div.bg-card");
      codeBlocks.forEach((block) => {
        const codeElement = block.querySelector("code");
        if (codeElement) {
          // 提取代码文本内容
          const codeText = codeElement.textContent || "";
          
          // 创建新的简化代码块
          const newCodeBlock = document.createElement("div");
          newCodeBlock.style.setProperty("background-color", "#f3f4f6", "important");
          newCodeBlock.style.setProperty("border", "1px solid #e5e7eb", "important");
          newCodeBlock.style.setProperty("border-radius", "6px", "important");
          newCodeBlock.style.setProperty("margin", "8px 0", "important");
          newCodeBlock.style.setProperty("padding", "0 12px 12px 12px", "important");
          newCodeBlock.style.setProperty("overflow-x", "auto", "important");
          
          const newCode = document.createElement("code");
          newCode.textContent = codeText;
          newCode.style.setProperty("font-family", "monospace", "important");
          newCode.style.setProperty("font-size", "13px", "important");
          newCode.style.setProperty("line-height", "1.5", "important");
          newCode.style.setProperty("color", "#1f2937", "important");
          newCode.style.setProperty("white-space", "pre", "important");
          newCode.style.setProperty("display", "block", "important");
          
          newCodeBlock.appendChild(newCode);
          
          // 替换原来的复杂结构
          block.parentNode?.replaceChild(newCodeBlock, block);
        }
      });

      // 处理行内代码 (不在 div.bg-card 中的 code)
      const inlineCodes = element.querySelectorAll("code");
      inlineCodes.forEach((code) => {
        const htmlCode = code as HTMLElement;
        // 跳过已经被重写的代码块中的 code
        if (!htmlCode.closest("div[style*='background-color: rgb(243, 244, 246)']")) {
          htmlCode.style.setProperty("color", "#dc2626", "important"); // 红色
          htmlCode.style.setProperty("background-color", "#fee2e2", "important"); // 浅红背景
          htmlCode.style.setProperty("padding", "2px 6px", "important");
          htmlCode.style.setProperty("border-radius", "3px", "important");
          htmlCode.style.setProperty("font-family", "monospace", "important");
          htmlCode.style.setProperty("font-size", "0.9em", "important");
        }
      });

      const blockquotes = element.querySelectorAll("blockquote");
      blockquotes.forEach((blockquote) => {
        const htmBlockquote = blockquote as HTMLElement;
        htmBlockquote.style.setProperty("padding", "0px 8px 3px 8px", "important");
        htmBlockquote.style.setProperty("border-left", "4px solid #e5e7eb", "important");
        htmBlockquote.style.setProperty("border-radius", "4px", "important");
        htmBlockquote.style.setProperty("background-color", "#f7f7f8", "important"); // 不透明版
        htmBlockquote.style.setProperty("color", "#6b7280", "important");
        htmBlockquote.style.setProperty("margin", "8px 0", "important");
      });

      // ===== 新增：强制应用列表样式 =====
      const lists = element.querySelectorAll("ul, ol");
      lists.forEach((list) => {
        const htmlList = list as HTMLElement;
        htmlList.style.setProperty("margin", "8px 0", "important");
        htmlList.style.setProperty("padding-left", "0px", "important");
        
        if (list.tagName === "UL") {
          htmlList.style.setProperty("list-style-type", "disc", "important");
        } else {
          htmlList.style.setProperty("list-style-type", "decimal", "important");
        }
      });
      
      const listItems = element.querySelectorAll("li");
      listItems.forEach((li) => {
        const htmlLi = li as HTMLElement;
        const parentList = htmlLi.closest("ul, ol");
        
        // 移除原生标记
        htmlLi.style.setProperty("list-style-type", "none", "important");
        htmlLi.style.setProperty("margin", "6px 0", "important");
        htmlLi.style.setProperty("padding-left", "0px", "important");
        htmlLi.style.setProperty("line-height", "1.5", "important");
        htmlLi.style.setProperty("display", "flex", "important");
        htmlLi.style.setProperty("align-items", "flex-start", "important");
        
        // 创建自定义标记
        const marker = document.createElement("span");
        marker.style.marginRight = "8px";
        marker.style.color = "#6b7280";
        marker.style.flexShrink = "0";
        marker.style.marginTop = "2px";  // 微调垂直位置
        
        if (parentList?.tagName === "UL") {
          marker.textContent = "•";  // 圆点
        } else {
          // 有序列表：获取当前序号
          const listIndex = Array.from(parentList?.children || []).indexOf(li) + 1;
          const start = parseInt(parentList?.getAttribute("start") || "1");
          marker.textContent = `${listIndex + start - 1}.`;  // 数字
          marker.style.fontWeight = "500";
        }
        
        // 将标记插入到 li 的最前面
        htmlLi.insertBefore(marker, htmlLi.firstChild);
      });
      // ===== 结束新增 =====
    }

    // 3. 使用 html2canvas 生成图片
    // 注意：backgroundColor设为null，让组件自己的背景显示
    const canvas = await html2canvas(container.firstChild as HTMLElement, {
      backgroundColor: null,
      scale,
      logging: false,
      useCORS: true,
      allowTaint: false,
      ignoreElements: (element) => {
        // 忽略style标签，避免被截图
        return element.tagName === "STYLE";
      },
      onclone: (clonedDoc) => {
        // 移除所有样式表，避免 Tailwind 的 oklch 颜色被应用
        const styles = clonedDoc.querySelectorAll("style, link[rel='stylesheet']");
        styles.forEach(style => style.remove());
        
        const clonedElement = clonedDoc.querySelector(".memo-share-card");
        if (clonedElement) {
          const allEls = [clonedElement, ...Array.from(clonedElement.querySelectorAll("*"))];
          
          // 移除所有 class 属性，只保留内联样式
          allEls.forEach((el) => {
            const htmlEl = el as HTMLElement;
            htmlEl.removeAttribute("class");
            
            // 强制设置默认颜色（如果没有内联样式）
            if (!htmlEl.style.color) {
              htmlEl.style.setProperty("color", "#1f2937", "important");
            }
            if (htmlEl !== clonedElement && !htmlEl.style.backgroundColor) {
              htmlEl.style.setProperty("background-color", "transparent", "important");
            }
          });
          
          // 恢复根元素的标识类
          clonedElement.classList.add("memo-share-card");
        }
      },
    });

    // 4. 转换为 Data URL
    const imageUrl = canvas.toDataURL("image/png");

    // 5. 获取图片尺寸
    const width = canvas.width / scale;
    const height = canvas.height / scale;

    // 6. 估算文件大小(Base64编码后的长度)
    const size = Math.round((imageUrl.length - "data:image/png;base64,".length) * 0.75);

    // 7. 清理 React root
    root.unmount();

    return { imageUrl, width, height, size };
  } catch (error) {
    console.error("Failed to generate memo share image:", error);
    throw new Error("图片生成失败，请重试");
  } finally {
    // 8. 清理临时DOM
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
}
