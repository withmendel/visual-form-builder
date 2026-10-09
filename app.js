document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Define Custom Banking UI Blocks (JSON format)
    Blockly.defineBlocksWithJsonArray([
        {
            "type": "add_text_input",
            "message0": "Add Text Input | Label: %1",
            "args0": [
                { "type": "field_input", "name": "LABEL", "text": "Customer Name" }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Creates a labeled text input field in the form."
        },
        {
            "type": "add_submit_button",
            "message0": "Add Submit Button | Text: %1",
            "args0": [
                { "type": "field_input", "name": "BTN_TEXT", "text": "Apply Now" }
            ],
            "previousStatement": null,
            "colour": 160,
            "tooltip": "Creates a submit button."
        }
    ]);

    // 2. Define the Code Generator for our custom blocks
    // This tells Blockly how to translate the visual block into a string of HTML
    const htmlGenerator = new Blockly.Generator('HTML');
    
    htmlGenerator.forBlock['add_text_input'] = function(block) {
        const label = block.getFieldValue('LABEL');
        return `
            <div class="flex flex-col">
                <label class="font-semibold text-gray-700 mb-1">${label}</label>
                <input type="text" class="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600" placeholder="Enter ${label.toLowerCase()}">
            </div>
        `;
    };

    htmlGenerator.forBlock['add_submit_button'] = function(block) {
        const btnText = block.getFieldValue('BTN_TEXT');
        return `
            <button type="submit" class="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4">
                ${btnText}
            </button>
        `;
    };

    // 3. Configure the Toolbox to show our custom blocks
    const toolboxConfig = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "name": "Form Elements",
                "colour": "#4CAF50",
                "contents": [
                    { "kind": "block", "type": "add_text_input" },
                    { "kind": "block", "type": "add_submit_button" }
                ]
            }
        ]
    };

    // 4. Inject Blockly Workspace
    const workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolboxConfig,
        scrollbars: true,
        trashcan: true
    });

    // 5. Connect the "Preview Form" Button to generate and render HTML
    const generateBtn = document.getElementById("generateBtn");
    const generatedFormContainer = document.getElementById("generatedForm");
    const placeholderText = document.getElementById("placeholderText");

    generateBtn.addEventListener("click", () => {
        // Generate our HTML string from the blocks in the workspace
        const generatedHTML = htmlGenerator.workspaceToCode(workspace);
        
        if (generatedHTML.trim() === "") {
            alert("Workspace is empty! Drag some blocks in first.");
            return;
        }

        // Hide placeholder and inject the live HTML
        placeholderText.style.display = 'none';
        generatedFormContainer.innerHTML = generatedHTML;
    });
});