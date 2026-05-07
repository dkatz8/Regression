Dim iURL, objShell, fileSystemObj, browserPath

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
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Login -").Page("Login -").WebButton("Continue").Click
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "69fc9dc1a5705566522fe0b435b7ce24ff521017ce95db0240ff56456e99d49c8184" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Login -").Page("Login -").WebButton("Sign in").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("NewRun manual tests autonomous").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("User").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "ikaro@opentext.com" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "ikaro@opentext.com" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "ikaro@opentext.com" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("WebElement_3").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebList("Roles").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "ikaro@opentext.com" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("DevOps Admin").Set "ON" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("OK").Click @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebElement("Add Add Add & Edit Add").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "ivaytzman@opentext.com" @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "ivaytzman@opentext.com" @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "ivaytzman@opentext.com" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "ivaytzman@opentext.com" @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "bsopher@opentext.com" @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "bsopher@opentext.com" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "bsopher@opentext.com" @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "bsopher@opentext.com" @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "rkarat@opentext.com" @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "rkarat@opentext.com" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "rkarat@opentext.com" @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "rkarat@opentext.com" @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "myohayrafalo@opentext.com" @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "myohayrafalo@opentext.com" @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "myohayrafalo@opentext.com" @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "myohayrafalo@opentext.com" @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "elokshin@opentext.com" @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "elokshin@opentext.com" @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "elokshin@opentext.com" @@ script infofile_;_ZIP::ssf44.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "elokshin@opentext.com" @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "dkatz@opentext.com" @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "dkatz@opentext.com" @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "dkatz@opentext.com" @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "dkatz@opentext.com" @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "tfarchi@opentext.com" @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "tfarchi@opentext.com" @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "tfarchi@opentext.com" @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "tfarchi@opentext.com" @@ script infofile_;_ZIP::ssf55.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf56.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "mnovac@opentext.com" @@ script infofile_;_ZIP::ssf57.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "mnovac@opentext.com" @@ script infofile_;_ZIP::ssf58.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "mnovac@opentext.com" @@ script infofile_;_ZIP::ssf59.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "mnovac@opentext.com" @@ script infofile_;_ZIP::ssf60.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf61.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "nvanunu@opentext.com" @@ script infofile_;_ZIP::ssf62.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "nvanunu@opentext.com" @@ script infofile_;_ZIP::ssf63.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "nvanunu@opentext.com" @@ script infofile_;_ZIP::ssf64.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "nvanunu@opentext.com" @@ script infofile_;_ZIP::ssf65.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf66.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "nyomtov@opentext.com" @@ script infofile_;_ZIP::ssf73.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "nyomtov@opentext.com" @@ script infofile_;_ZIP::ssf74.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "nyomtov@opentext.com" @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "nyomtov@opentext.com" @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf79.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "msabag@opentext.com" @@ script infofile_;_ZIP::ssf80.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "msabag@opentext.com" @@ script infofile_;_ZIP::ssf81.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "msabag@opentext.com" @@ script infofile_;_ZIP::ssf82.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "msabag@opentext.com" @@ script infofile_;_ZIP::ssf83.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf84.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "yraziel@opentext.com" @@ script infofile_;_ZIP::ssf85.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "yraziel@opentext.com" @@ script infofile_;_ZIP::ssf86.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "yraziel@opentext.com" @@ script infofile_;_ZIP::ssf87.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "yraziel@opentext.com" @@ script infofile_;_ZIP::ssf88.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf89.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "rsidon@opentext.com" @@ script infofile_;_ZIP::ssf90.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "rsidon@opentext.com" @@ script infofile_;_ZIP::ssf91.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "rsidon@opentext.com" @@ script infofile_;_ZIP::ssf92.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "rsidon@opentext.com" @@ script infofile_;_ZIP::ssf93.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add & Another").Click @@ script infofile_;_ZIP::ssf94.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("First name").Set "eshmidov@opentext.com" @@ script infofile_;_ZIP::ssf95.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Last name").Set "eshmidov@opentext.com" @@ script infofile_;_ZIP::ssf96.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Email").Set "eshmidov@opentext.com" @@ script infofile_;_ZIP::ssf97.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Phone").Set "eshmidov@opentext.com" @@ script infofile_;_ZIP::ssf98.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf99.xml_;_
