# Polymath AI Chrome Extension + Next.js Programming Task

<video controls src="public/chrome-ext-video.mp4" title="Title"></video>
![alt text](public/icon32.png)
## Chrome Extension to save the current Tab

### Note: I have tried many Next.js versions like 13.5, 13.7, 14.1, and 14.2, but Next.js is not stable for dynamic Chrome extensions. I have spent more than 5 hours trying to create a Chrome extension with Next.js, but only a static page is created. How can we create a Chrome extension with Next.js that supports dynamic content?

> So I have moved to react.js + firebase

## Workflow

1. **Create Manifest File**
   - The manifest file is mandatory for a Chrome extension. This file contains important metadata about your extension, such as its name, version, permissions, and background scripts.

2. **Set Up React.js App with Firebase**
   - Create a React.js application and integrate Firebase for data storage and retrieval.

3. **Main Code in `src/App.jsx`**
   - All the core functionality is implemented in the `src/App.jsx` file.

### Inside `src/App.jsx`

- **Saved URLs Array**
  - An array stores all the saved URLs.

- **Displaying Saved URLs**
  - When the user clicks on the extension icon, it displays all the saved URLs.
  - Each URL is rendered as a clickable link, opening in a new tab:
    ```jsx
    <a href={u.url} target="_blank" rel="noopener noreferrer">
      {u.title}
    </a>
    ```

- **Deleting URLs**
  - Users can delete URLs from the array by clicking the delete button:
    ```jsx
    const deleteUrl = async (index) => {
      // Implementation to delete URL from the array
    };
    ```

- **Saving the Current URL**
  - Users can save the current URL to the array by clicking the save button:
    ```jsx
    const handleSave = async () => {
      // Implementation to save the current URL
    };
    ```

4. **Firebase Integration**
   - Set up a Firebase database and add data to it.
   - Create a Firebase project and include the Firebase configuration in the React.js app.
     > `src/firebaseConfig.js`
     ```javascript
     // This file contains the configuration to connect to the Firebase database
     export const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     };
     ```
