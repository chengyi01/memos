/**
 * Minimum width required to show more than one column in masonry layout
 * When viewport is narrower, layout falls back to single column
 * Lowered from 512 to 450 for better multi-column layout triggering
 */
export const MINIMUM_MEMO_VIEWPORT_WIDTH = 450;

/**
 * Debounce delay for redistribution in milliseconds
 * Balances responsiveness with performance by batching rapid height changes
 */
export const REDISTRIBUTION_DEBOUNCE_MS = 100;
