export function throwIfAlreadyLoaded(parentModule: any, moduleName: String) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}
