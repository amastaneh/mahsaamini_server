const exceptionHandler = (req, res, errCode, ex, extra) => {
    let errMessage = {}

    try {
        // Create error message
        errMessage = {
            "Code": errCode,
            "Extra": extra,
            "Ex": {
                name: ex.name,
                description: ex.description,
                message: ex.message,
                number: ex.number,
                fileName: ex.fileName,
                lineNumber: ex.lineNumber,
                columnNumber: ex.columnNumber,
                stack: ex.stack,
            },
            "Response": resCode,
            "Request": {
                fullUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
                Url: req.url,
                query: req.query,
                params: req.params,
                ipAddress1: req.ip,
            },
            "Request Headers": req.headers
        };

        // Send notification
        if (process.env.NODE_ENV === "development") {
            console.log(`Error ${resCode}:`, errMessage);
        }
        else {
            // const errorTitle = "Error " + errCode
            // try { sendNotification(process.env.NODEJS_DISTRO_EXCEPTION, errorTitle, errMessage); }
            // catch (ex) { /* empty */ }
        }

        // Return message
        if (req?.query?.info === "true")
            return res.status(resCode).send(errMessage);
        else
            return res.status(resCode).send(errMessage?.Exception?.message ?? "Unhandled Exception");
    }
    catch {
        return res.status(500).send("Unhandled Exception #2")
    }
};

module.exports = {
    exceptionHandler,
};