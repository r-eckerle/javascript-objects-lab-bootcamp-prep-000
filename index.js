var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, {[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val
  return obj
}

function deletFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}