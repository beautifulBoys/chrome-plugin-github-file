function objMap (obj, arr1) {
  if (obj['$index'] || obj['$index'] === 0) { // 文件夹
    arr1[obj.$index].tree = [];
    for (let k in obj) {
      if (k === '$index') continue;
      arr1[obj.$index].tree.push(objMap(obj[k], arr1));
    }
    return arr1[obj.$index];
  } else { // 文件
    return arr1[obj];
  }
}

function sort (arr) {
  return arr.sort(function (a, b) {
    return a.info.size - b.info.size;
  });
}
function mapTree (arr, object) { // username: url: repository:
  for (let i = 0; i < arr.length; i++) {
    let info = {};
    info.index = i;
    info.arr = arr[i].path.split('/');
    info.size = info.arr.length;
    info.text = info.arr[info.size - 1];
    info.fold = false;
    info.aurl = '/' + object.username + '/' + object.repository + '/blob/master/' + arr[i].path;
    info.file = arr[i].type === 'blob' ? true : false;
    arr[i].info = info;
  }
  return arr;
}

export default (arr1, object) => {
  let arr = sort(mapTree(arr1.concat([]), object));
  let newArr = [];
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {

    if (arr[i].info.size === 1) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 2) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 3) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 4) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 5) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 6) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]] = {$index: arr[i].info.index};
    } else if (arr[i].info.size === 7) {
      if (arr[i].info.file) newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]][arr[i].info.arr[6]] = arr[i].info.index;
      else newObj[arr[i].info.arr[0]][arr[i].info.arr[1]][arr[i].info.arr[2]][arr[i].info.arr[3]][arr[i].info.arr[4]][arr[i].info.arr[5]][arr[i].info.arr[6]] = {$index: arr[i].info.index};
    }
  }

  for (let k in newObj) {
    if (k === '$index') continue;
    newArr.push(objMap(newObj[k], arr1));
  }
  return newArr;
};
