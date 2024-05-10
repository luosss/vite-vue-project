<template>
  <div class="b_wrapper">
    <div class="title_wrapper">
      <span>复杂表格导出</span>
      <el-button class="" @click="exportExcel" type="primary">导出</el-button>
    </div>
    <el-table ref="tableRef" :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center">
        <el-table-column> </el-table-column>
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address"
        align="center"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import * as XLSX from "xlsx";
import XLSXS from "xlsx-js-style";

const tableRef: any = ref(null);

const tableData = ref([
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
]);

function exportExcel() {
  const wb = XLSX.utils.book_new();
  const ws: any = XLSX.utils.json_to_sheet(tableData.value);
  // s 表示要合并的单元格范围的左上角单元格，r 表示该单元格的行号，c 表示该单元格的列号，行列号从 0 开始计数。所以 { r: 0, c: 0 } 表示第 1 行第 1 列的单元格，即 A1 单元格。
  // e 表示要合并的单元格范围的右下角单元格，其含义与 s 相同。所以 { r: 0, c: 1 } 表示第 1 行第 2 列的单元格，即 B1 单元格。
  // 因此，{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } } 表示要合并第 1 行第 1 列和第 1 行第 3 列之间的元格。
  // 注意，合并会以开始位置单元格中的内容为准，所以合并后的单元格中的内容为 A1 单元格中的内容。
  ws["!merges"] = [];
  console.log(ws, "ws");
  ws["!cols"] = [{ wpx: 80 }, { wpx: 100 }, { wpx: 180 }, { wpx: 400 }];
  const centerStyle = {
    alignment: { horizontal: "center", vertical: "center" },
  };
  XLSX.utils.sheet_add_aoa(ws, [["日期", "姓名", "地址"]]);
  // 将样式应用到所有单元格
  const range = XLSXS.utils.decode_range(ws["!ref"]);
  for (let R = range.s.r; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSXS.utils.encode_cell({ r: R, c: C });
      ws[cellAddress].s = centerStyle; // 设置单元格样式
    }
  }

  XLSXS.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSXS.writeFile(wb, "example.xlsx");
}


</script>
