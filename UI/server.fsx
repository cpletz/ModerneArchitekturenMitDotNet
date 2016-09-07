#r "packages/Suave/lib/net40/Suave.dll"

open Suave
open Suave.Operators
open Suave.Web
open Suave.Writers

let noCache = 
    setHeader "Cache-Control" "no-cache, no-store, must-revalidate" >=> setHeader "Pragma" "no-cache" 
    >=> setHeader "Expires" "0"

let serveFiles = 
    choose [ Filters.GET >=> choose [ Filters.path "/" >=> Files.file "index.html"
                                      Files.browseHome ]
             RequestErrors.NOT_FOUND "Page not found." ]

let app = noCache >=> serveFiles

let mimeTypes = 
    defaultMimeTypesMap @@ (function 
    | ".woff" -> mkMimeType "application/font-woff" false
    | ".woff2" -> mkMimeType "application/font-woff2" false
    | _ -> None)

let homePath = sprintf "%s\\export" __SOURCE_DIRECTORY__
// let homePath =  __SOURCE_DIRECTORY__

let config = 
    { defaultConfig with homeFolder = Some(homePath)
                         mimeTypesMap = mimeTypes }

startWebServer config app
