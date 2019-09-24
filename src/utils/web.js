//v1.0.190425

import _ from 'lodash/core';

export function urlJoin(...parts) {
    return parts.map(p => _.trim(p, '/')).join('/');
}

export function normalizePath(p) {
    return p[0] === '?' ? p : p[0] === '/' ? p : '/' + p;
}
export function appPath(p) {
    return p
        ? window.__basePath + normalizePath(p)
        : window.__basePath === ''
            ? '/'
            : window.__basePath;
}

export function buildQuery(data) {
    return Object.keys(data)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');
}

export function redirect(path) {
    window.location.replace(appPath(path));
}

export function goto(path) {
    window.location.href = appPath(path);
}

export function url(pathname, query) {
    let loc = window.location;

    pathname = _.trimStart(pathname, '/');
    
    return loc.protocol + "//" + loc.host + "/" + (pathname || loc.pathname) + (query ? ('?' + buildQuery(query)) : loc.search); 
}