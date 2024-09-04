const electron = require('electron');
// Module to control application life.
const { app, Menu, BrowserWindow, screen } = electron;

// Module to create native browser window.
const path = require('path');

// Definisikan konstanta untuk direktori Laravel
const LARAVEL_DIRECTORY = '....';

// PHP SERVER CREATION /////
const PHPServer = require('php-server-manager');

let server;
if (process.platform === 'win32') {
  server = new PHPServer({
    php: `${__dirname}/php/php.exe`, // Path to your PHP executable
    port: 8000, // Port for PHP server
    directory: path.join(__dirname, `${LARAVEL_DIRECTORY}/public`), // Menggunakan konstanta
    directives: {
      display_errors: 1,
      expose_php: 1
    }
  });
} else {
  server = new PHPServer({
    port: 8000, // Port for PHP server
    directory: path.join(__dirname, `${LARAVEL_DIRECTORY}/public`), // Menggunakan konstanta
    directives: {
      display_errors: 1,
      expose_php: 1
    }
  });
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Start the PHP server and handle any potential errors
  server.run().then(() => {
    console.log('PHP server started successfully.');

    // Get the primary display size
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: width,
      height: height,
      autoHideMenuBar: true,
      transparent: true, // Makes the window background transparent
      backgroundColor: '#00000000', // Ensures the background is transparent
    });

    // Load the Laravel application URL.
    mainWindow.loadURL('http://' + server.host + ':' + server.port + '/');

    // Set the zoom level to 90%
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.setZoomFactor(0.9);
      console.log('Laravel app loaded in Electron.');
    });

    // Handle window close event
    mainWindow.on('closed', function () {
      // Dereference the window object.
      server.close(); // Stop the PHP server when window is closed
      mainWindow = null;
    });

    // Optionally open the DevTools
    // mainWindow.webContents.openDevTools();
  }).catch(err => {
    console.error('Failed to start PHP server:', err);
  });
}

// This method will be called when Electron has finished initialization
// and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    // PHP SERVER QUIT
    server.close();
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// Menu for macOS (optional)
app.on('ready', () => {
  if (process.platform === 'darwin') {
    var template = [
      {
        label: 'FromScratch',
        submenu: [
          {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: function () {
              app.quit();
            }
          }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
          { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
          { type: 'separator' },
          { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
          { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
          { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
          { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
        ]
      }
    ];
    var osxMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(osxMenu);
  }
});
