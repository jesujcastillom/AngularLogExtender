//---------------------------------------//

/**
 * The following function exposes the $decorated logger to allow the defaults to be overridden
 * @param $log
 * @returns {*}
 */
var exposeSafeLog = function ($log) {
    return createLogObj($log, allowedMethods);
};