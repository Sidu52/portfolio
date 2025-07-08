const SuccessResponse = (res, data, message) => {
    return res.status(200).json({
        success: true,
        data: data,
        message
    });
}

const ErrorResponse = (res, message, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message: message,
        error: "An error occurred"
    });
}

module.exports = { SuccessResponse, ErrorResponse }