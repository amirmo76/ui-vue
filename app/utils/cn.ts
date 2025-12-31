import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * This utility function is used to merge tailwind CSS class names
 * and resolve conflicts.
 *
 * For example, if you pass in both "p-2" and "p-4", the resulting class
 * string will only include "p-4" since it takes precedence.
 */
export default (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
