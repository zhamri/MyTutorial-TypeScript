/**
 * Calculates the average of a list of marks.
 *
 * @param marks - Array of student marks (0–100)
 * @returns The average mark as a number
 * @throws Error if the array is empty
 * @example
 * // Example usage:
 * const avg = calculateAverage([80, 90, 100]);
 * console.log(avg); // 90
 *
 * @see getTotal
 * @author Zhamri
 * @version 1.0.0
 */
function calculateAverage(marks: number[]): number {
    if (marks.length === 0) {
        throw new Error("Marks array cannot be empty");
    }
    const total = marks.reduce((a, b) => a + b, 0);
    return total / marks.length;
}

