/**
	Object used for Cookie management
	Usage -
	Cookie.get(name)
	Cookie.set(name, value, [opts])
		Options supports all standard cookie options and adds 'days'
			path: '/' - any absolute path. Default: current document location,
			domain: 'sub.example.com' - may not start with dot. Default: current host without subdomain.
			secure: true - Only serve cookie over https. Default: false.
			days: 2 - days till cookie expires. Default: End of session.
				Alternative ways of setting expiration:
				expires: 'Sun, 18 Feb 2018 16:23:42 GMT' - date of expiry as a GMT string.
				Current date can be gotten with: new Date(Date.now()).toUTCString()
				'max-age': 30 - same as days, but in seconds instead of days.
 	Cookie.delete(name, opts)
 */

export const Cookie =
	{ get: name => {
			let c = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1]
			if (c) return decodeURIComponent(c)
		}
		, set: (name, value, opts = {}) => {
			if (opts.days) {
				opts['max-age'] = opts.days * 60 * 60 * 24;
				delete opts.days
			}
			opts = Object.entries(opts).reduce((str, [k, v]) => `${str}; ${k}=${v}`, '')
			document.cookie = name + '=' + encodeURIComponent(value) + opts
		}
		, delete: (name, opts) => Cookie.set(name, '', {'max-age': -1, ...opts})
		// path & domain must match cookie being deleted
	}