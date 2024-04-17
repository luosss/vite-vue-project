<template>
  <div class="b_wrapper">
    <div class="title_wrapper">
      <span>表格导出方式一</span>
      <el-button class="" @click="exportExcel" type="primary">导出</el-button>
    </div>
    <el-table ref="tableRef" :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="address" label="Address" align="center" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import * as XLSX from "xlsx";
import XLSXS from "xlsx-js-style";
import FileSaver from "file-saver";

const tableRef: any = ref(null);

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

function exportExcel() {
  // const tableDom = tableRef.value?.$el;
  // if (!tableDom) {
  //   return;
  // }
  // const wb = XLSX.utils.table_to_book(tableDom);
  // XLSX.writeFile(wb, '表格数据.xlsx');

  let table = [
    // 表格表头
    ["", "", "", ""],
    ["序号", "时间", "姓名", "地址"],
  ];
  tableData.forEach((item: any, index: any) => {
    let rowData = [];
    //导出内容的字段
    rowData = [index + 1, item.date, item.name, item.address];
    table.push(rowData);
  });
  console.log(table, 213123);
  let bookNew = XLSX.utils.book_new();
  let workSheet = XLSX.utils.aoa_to_sheet(table);
  XLSX.utils.book_append_sheet(bookNew, workSheet, "作品名称"); // 设置工作簿名称

  // 设置标题行单元格合并
  // s即start, e即end, r即row, c即column
  // 合并从--0行0列开始,到0行3列
  // workSheet['!merges'] = [
  //   { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } },
  //   { s: { r: 7, c: 1 }, e: { r: 8, c: 2 } },
  // ]
  console.log(workSheet, "workSheet");
  // 调用 设置表格样式的方法
  setExlStyle(workSheet);

  // 设置单元格宽度
  workSheet["!cols"] = [{ wpx: 80 }, { wpx: 100 }, { wpx: 180 }, { wpx: 400 }];

  // 导出Excel, 注意这里用到的是XLSXS对象
  let wbout = XLSXS.write(bookNew, {
    bookType: "xlsx",
    bookSST: false,
    type: "binary",
  });

  FileSaver.saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    "全部人员.xlsx" // 保存的文件名
  );

  // const data = XLSX.utils.json_to_sheet(tableData)//此处tableData.value为表格的数据
  // const wb = XLSX.utils.book_new()
  // XLSX.write(wb,{ bookType: 'xlsx', bookSST: true, type: 'array' })
  // XLSX.utils.book_append_sheet(wb, data, 'test-data')//test-data为自定义的sheet表名
  //   // 导出Excel, 注意这里用到的是XLSXS对象
  //   let wbout = XLSXS.write(wb, {
  //   bookType: 'xlsx',
  //   bookSST: false,
  //   type: 'binary',
  // })

  // FileSaver.saveAs(
  //   new Blob([s2ab(wbout)], {
  //     type: 'application/octet-stream'
  //   }),
  //   '全部人员.xlsx' // 保存的文件名
  // )
  // XLSX.writeFile(wb,'test.xlsx')//test.xlsx为自定义的文件名
}

// 工具方法
function s2ab(s: any) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

function setExlStyle(data: any) {
  //单元格外侧框线
  let borderAll = {
    top: {
      style: "thin",
    },
    bottom: {
      style: "thin",
    },
    left: {
      style: "thin",
    },
    right: {
      style: "thin",
    },
    diagonal: {
      style: "thin",
      color: "red",
    },
  };

  for (let key in data) {
    if (key === "A1") {
      data[key].s = {
        font: {
          name: "宋体", //字体类型
          sz: 20, //字体大小
          color: { rgb: "ff0000" }, //字体颜色
          bold: true, //是否加粗
        },
        fill: {
          patternType: "solid", // 默认 solid，设为 none 时，fgColor 失效
          bgColor: {
            // 无效
            rgb: "0000FF",
          },
          fgColor: {
            // 背景色
            theme: "2",
            tint: "-0.25",
          },
        },
      };
      continue;
    }

    if (data[key] instanceof Object) {
      console.log(data[key], "8888");
      data[key].s = {
        // 边框
        border: borderAll,
        // 对齐方式相关样式
        alignment: {
          vertical: "center", //垂直对齐方式
          horizontal: "center", //水平对齐方式
          // wrapText: true,  //自动换行
        },
        //字体相关样式
        font: {
          name: "宋体", //字体类型
          sz: 20, //字体大小
          color: { rgb: "" }, //字体颜色
          bold: false, //是否加粗
        },
        //背景相关样式

        bold: true,
        numFmt: 0,
      };
    }
  }
}
</script>
