﻿Dim iURL, objShell, fileSystemObj, browserPath

iURL = Parameter("URL")
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

browserPath = "C:\Program Files\Mozilla Firefox\firefox.exe"
If Not fileSystemObj.FileExists(browserPath) Then
    browserPath = "C:\Program Files (x86)\Mozilla Firefox\firefox.exe"
    If Not fileSystemObj.FileExists(browserPath) Then
        Reporter.ReportEvent micFail, "Browser Launch", "Firefox not found on this machine"
        ExitTest
    End If
End If

objShell.ShellExecute browserPath, iURL, "", "", 1
Wait(5)
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com"
Browser("Login -").Page("Login -").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "69f890204d61a3ca964cad5eae13fb295318972f5f041409332328c7229473bcf0a0" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Login -").Page("Login -").WebButton("Sign in").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("OK").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("User").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set Parameter("Name") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set Parameter("LastName") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set Parameter("Email") @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement_3").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "1" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("Roles:").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("DevOps Admin").Set "ON" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("OK_2").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf18.xml_;_
