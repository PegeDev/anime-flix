export function truncate(text: string, maxLength: number): string {
  if (text) {
    if (text?.length <= maxLength) {
      return text;
    } else {
      return text?.slice(0, maxLength) + "...";
    }
  } else {
    return "No Title";
  }
}
