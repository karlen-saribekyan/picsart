export function changeParams(
  text: string,
  params: Record<string, string>
): string {
  const paramRegex = /:\w+/g;

  return text.replace(paramRegex, match => {
    const paramName = match.substring(1);
    return params[paramName] || match;
  });
}

export function compareRoutes(route1: string, route2: string): boolean {
  const paramRegex = /:\w+/g;
  const route1Replaced = route1.replace(paramRegex, "");
  const route2Replaced = route2.replace(paramRegex, "");

  return route1Replaced === route2Replaced;
}
