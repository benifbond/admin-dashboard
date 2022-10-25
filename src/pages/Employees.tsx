
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Search, Toolbar } from "@syncfusion/ej2-react-grids"
import { employeesGrid, employeesData } from "../data/dummy"
import { Header } from "../components";
const Employees = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"

      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )

}

export default Employees