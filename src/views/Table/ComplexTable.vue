<template>
  <el-button class="" @click="exportExcel" type="primary">导出</el-button>
  <div>
    <span>复杂表格</span>
  </div>
  <el-table ref="tableRef" :data="tableData" style="width: 100%" :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ textAlign: 'center' }">
    <el-table-column prop="date" label="日期" width="150" align="center"/>
    <el-table-column label="信息" align="center">
      <el-table-column prop="name" label="名字" width="120" align="center"/>
      <el-table-column label="地址" align="center">
        <el-table-column prop="state" label="状态" width="120"/>
        <el-table-column prop="city" label="城市" width="120"/>
        <el-table-column prop="address" label="Address"/>
        <el-table-column prop="zip" label="Zip" width="120"/>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {ref,reactive} from "vue";
import * as XLSX from 'xlsx'; 

const tableRef:any = ref(null);



const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]

function exportExcel () {
  const tableDom = tableRef.value?.$el;
  if (!tableDom) {
    return;
  }
  const wb = XLSX.utils.table_to_book(tableDom);
  XLSX.writeFile(wb, '表格数据.xlsx');
}

</script>
