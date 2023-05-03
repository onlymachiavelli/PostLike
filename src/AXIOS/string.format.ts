function jsonFormat(data: string | object): string {
    let jsonString: string;
  
    // Check if data is already a JSON string or object
    if (typeof data === "string") {
      jsonString = data;
    } else {
      jsonString = JSON.stringify(data);
    }
  
    let formattedString = "";
    let indentLevel = 0;
  
    // Loop through each character in the JSON string
    for (let i = 0; i < jsonString.length; i++) {
      const char = jsonString[i];
  
      if (char === "{") {
        // If the character is an opening brace, add a new line and indent the next line
        formattedString += "{\n";
        indentLevel++;
        formattedString += "  ".repeat(indentLevel);
      } else if (char === "}") {
        // If the character is a closing brace, add a new line and reduce the indent level
        formattedString += "\n";
        indentLevel--;
        formattedString += "  ".repeat(indentLevel);
        formattedString += "}";
      } else if (char === ",") {
        // If the character is a comma, add a new line and indent the next line
        formattedString += ",\n";
        formattedString += "  ".repeat(indentLevel);
      } else {
        // Otherwise, just add the character to the formatted string
        formattedString += char;
      }
    }
  
    return formattedString;
  }
  
  export default jsonFormat;
  