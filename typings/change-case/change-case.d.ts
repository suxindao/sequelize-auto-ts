interface ChangeCase {
    dot(text:string):string;
    swap(text:string):string;
    path(text:string):string;
    upper(text:string):string;
    lower(text:string):string;
    camel(text:string):string;
    snake(text:string):string;
    title(text:string):string;
    param(text:string):string;
    pascal(text:string):string;
    constant(text:string):string;
    sentence(text:string):string;
    isUpper(text:string):boolean;
    isLower(text:string):boolean;
    ucFirst(text:string):string;
    lcFirst(text:string):string;

    dotCase(text:string):string;
    swapCase(text:string):string;
    pathCase(text:string):string;
    upperCase(text:string):string;
    lowerCase(text:string):string;
    camelCase(text:string):string;
    snakeCase(text:string):string;
    titleCase(text:string):string;
    paramCase(text:string):string;
    pascalCase(text:string):string;
    constantCase(text:string):string;
    sentenceCase(text:string):string;
    isUpperCase(text:string):boolean;
    isLowerCase(text:string):boolean;
    ucFirstCase(text:string):string;
    lcFirstCase(text:string):string;
}
declare module 'change-case' {
    var changeCase:ChangeCase;
    export = changeCase;
}
