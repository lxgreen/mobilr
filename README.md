# Mobilr
## Intro
The Mobilr is an application that allows to remotely control PC via smartphone (at the first phase, these are Windows PC and Android phone).
The Mobilr consists of 2 parts: node.js based Web server that runs on PC, and a hybrid Android app that runs on phone.
## Features
The Mobilr provides 3 main features:
* Launcher allows to select and run an application on PC. This has to be one of the predefined apps, per user. Also, the Launcher allows to define and run a remote control app for the selected Desktop app (e.g. [VLC Mobile Remote](http://vlcmobileremote.com/), [Kodi Remote](http://kodi.wiki/view/Kore)). It's up to user to select and configure such remote control app.
* File Manager (aka piBox) allows the common file operations between the PC and phone: transfer, copy, paste, delete, run. It is also provides an option to open file on PC, or phone (supported file types)
* PRO Version only: Reddo Mobility UX Connector integration allows to mobilize legacy apps (ATM, the supported platforms are .NET, VB, MFC, partially supported Delphi) that lack remote controlling abilities out of the box. This feature allows easily create the mobile UI by the user.

## Security
The Mobilr works on local network via WiFi. In addition, it requires Windows user authentication, providing an option 'Remember this device'.
