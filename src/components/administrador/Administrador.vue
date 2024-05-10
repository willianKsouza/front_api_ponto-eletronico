<template>
    <v-container>
  
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="searchQuery" label="Buscar" placeholder="Digite para pesquisar"></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="filteredItems" item-key="id">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.department }}</td>
              <td>{{ props.item.date }}</td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFilter: '',
        searchQuery: '',
        employees: [
          { id: 1, name: 'João', department: 'RH', date: '2024-05-01' },
          { id: 2, name: 'Maria', department: 'TI', date: '2024-05-02' },
          { id: 3, name: 'Pedro', department: 'Vendas', date: '2024-05-03' }
        ],
        timeSheets: [
          { id: 1, name: 'João', department: 'RH', date: '2024-05-01' },
          { id: 2, name: 'Maria', department: 'TI', date: '2024-05-02' },
          { id: 3, name: 'Pedro', department: 'Vendas', date: '2024-05-03' }
        ]
      };
    },
    computed: {
      filters() {
        return ['Funcionários', 'Folha de ponto'];
      },
      headers() {
        return [
          { text: 'Nome', align: 'start', value: 'name' },
          { text: 'Departamento', value: 'department' },
          { text: 'Data', value: 'date' }
        ];
      },
      filteredItems() {
        if (this.selectedFilter === 'Funcionários') {
          return this.filterEmployees();
        } else if (this.selectedFilter === 'Folha de ponto') {
          return this.filterTimeSheets();
        } else {
          return [];
        }
      }
    },
    methods: {
      filterEmployees() {
        return this.employees.filter(employee => {
          return (
            employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            employee.department.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            employee.date.includes(this.searchQuery)
          );
        });
      },
      filterTimeSheets() {
        return this.timeSheets.filter(timeSheet => {
          return (
            timeSheet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            timeSheet.department.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            timeSheet.date.includes(this.searchQuery)
          );
        });
      }
    }
  };
  </script>
  
 
  