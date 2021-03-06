var Microstache = (function (my) {
  function reEscape (str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')
  }
  function deepFind (obj, path) {
    var paths = path.split('.')
    var current = obj
    var i

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] === undefined) {
        return undefined
      } else {
        current = current[paths[i]]
      }
    }
    return current
  }
  my.template = function (htmlTemplate, data) {
    var re
    var rendered
    var key
    var keys = []
    function recurPush (obj, past) {
      for (key in obj) {
        if (typeof obj[key] === 'object') {
          recurPush(obj[key], past + key + '.')
        }

        keys.push('{{\\s*' + reEscape((past + key).toString()) + '\\s*}}')
      };
    }
    recurPush(data, '')
    keys = keys.join('|')
    if (keys) {
      re = new RegExp(keys, 'gi')
      rendered = htmlTemplate.replace(re, function (m) {
        var re = /{{\s*([^\s]*)\s*}}/g
        return deepFind(data, re.exec(m.toString())[1])
      })
    } else {
      rendered = htmlTemplate
    }
    return rendered.replace(/{{[^}}]*}}/gi, '')
  }
  return my
}({}))

if (typeof window !== 'undefined') {
  window.Microstache = Microstache
} else {
  module.exports = Microstache
}
