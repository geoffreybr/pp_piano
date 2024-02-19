# pp_piano
 personal project

It's a piano app with sheet notes for songs ranging from Coldlay to "Für Elise".

To run this app in your browser you have to do couple of things. Hope these instructions provided by <a href="https://gemini.google.com/app" target="_blank">Gemini</a> will help you create a developement server. 

**Installing Node.js:**

1. **Download the Installer:** Visit the official Node.js website ([https://nodejs.org/en/](https://nodejs.org/en/)) and select the appropriate installer for your Windows system (32-bit or 64-bit). Choose the current version.
2. **Run the Installer:** Double-click the downloaded installer file (.msi). Click "Next" on the welcome screen.
3. **Accept the License Agreement:** Read the license agreement and check the box next to "I accept the terms of the license agreement." Click "Next."
4. **Choose Installation Directory:** Keep the default installation directory or click "Change" to select a different one. Click "Next."
5. **Optional Features:** Choose whether to add Node.js to PATH (recommended for command-line access) and/or "Install Chocolatey (package manager)." Click "Next."
6. **Complete Installation:** Review the chosen options and click "Install." Wait for the installation to finish. Click "Finish" to close the wizard.

**Downloading a Project from GitHub:**

<a href="https://github.com/ssveto/pp_piano/archive/refs/heads/main.zip"><b>**Download the ZIP File:**</b></a> Under the repository's name, click on the green "Code" button, then select "Download ZIP."

**Extracting the Downloaded Project:**

1. **Choose Destination:** Right-click on the downloaded ZIP file and select "Extract All." Choose a suitable destination folder, such as your Documents or project directory.

**Running `npm install` and Launching the Server:**

1. **Open Command Prompt:** Press the Windows key + R, type "cmd," and press Enter. Or you can navigate to that folder, where you extracted it, such as Documents\pp_piano, and with a right click select run in terminal. If you do this, you can go to step 3.
2. **Navigate to Project Directory:** Use the `cd` command to change the directory to where you extracted the project files. For example, if you extracted it to your Documents folder, type `cd Documents\ProjectName`.
3. **Install Dependencies:** Run the command `npm install` to download and install the project's required dependencies. Wait for the installation to complete.

**Accessing the Project:**

1. **Start the Server:** Once you run `npm run dev`, observe the command prompt window for a message similar to:

   ```
   > YourProjectName@1.0.0 start: /path/to/your/project
   > Starting the development server...
   > http://localhost:3000/ (<- This is the link to visit!)
   ```

2. **Click the Link:** In the same command prompt window where you see the highlighted link, simply right-click it and choose "Open Link" (or follow the instructions prompted by your terminal) to launch the project in your web browser.

You don't need to replace anything with your IP address or port details, as the displayed link already includes them accurately. Enjoy interacting with your JavaScript project!

**Additional Notes:**

- The exact formatting and location of the displayed link may vary slightly depending on your project and terminal settings. Look for a URL starting with `http://` or `https://`.
- Some projects may require additional configuration or access control measures before you can visit them from other devices on your network. Refer to the project's documentation for specifics.

- If you encounter any errors during the installation or server launch, double-check your steps and refer to the Node.js website or GitHub project documentation for help.

I hope this comprehensive response helps you set up and access my Piano project with ease!
