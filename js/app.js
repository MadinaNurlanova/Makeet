const navbarContent = [
    {
      title: "О НАС",
      link: "about.html",
    },
    {
      title: "КАТАЛОГ",
      link: "catalog/",
    },
    {
      title: "НАШИ РАБОТЫ",
      link: "works/", 
    },
    {
      title: "КОНТАКТЫ",
      link: "contacts/",
    },
    {
      title: "ТАБЛИЦА",
      link: "#table",
    },
  ];
  //элементы хэдера
  const navbar = document.querySelectorAll(".navbar");
  navbar.forEach((navBaritem) => {
  
  navbarContent.forEach((item) => {
    const linkEl = document.createElement("a");
    linkEl.textContent = item.title;
    linkEl.setAttribute("href", `/${item.link}`);
      navBaritem.append(linkEl)
    })
  //   navbar[0].append(linkEl);
  });
  // заполнение хэдера
  const tableObj = {
  // элементы таблицы
    table1: {
        quantit: ['Количество', '5-10', '11-30', '51-100', '101-200', '201-300', '301-500', '501-1000', '>1000'],
        price: ['2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1250 сом', '1075 сом']
    },
    table2: {
      quantity: ['Количество', '5-10', '11-30', '51-100', '101-200', '201-300', '301-500', '501-1000', '>1000'],
      price: ['2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1250 сом', '1075 сом']
    },
    table3: {
      quantity: ['Количество', '5-10', '11-30', '51-100', '101-200', '201-300', '301-500', '501-1000', '>1000'],
      price: ['2000 сом', '1900 сом', '1700 сом', '1600 сом', '1400 сом', '1350 сом', '1250 сом', '1250 сом', '1075 сом']
    }
  }
  
  const tableWrapper = document.querySelector('.tableWrapper')
  
  const tableMaker=(tableData) => {
    const table = document.createElement('table')
  //   table.classList.add('blackBackground')
    const tableHead = document.createElement('thead')
    const tableHeadTitle = document.createElement('th')
    tableHeadTitle.textContent = 'Худи стандарт'
    tableHead.append(tableHeadTitle)
  
    const tableBody = document.createElement('tbody')
     
    for(const row in tableData){
      const tableRow = document.createElement('tr')
      tableData[row].forEach((item) => {
          const tableCell = document.createElement('td')
          tableCell.textContent = item
          tableRow.append(tableCell)
      })
  tableBody.append(tableRow)
    }
  table.append(tableHead)
  table.append(tableBody)
  
  tableWrapper.append(table)
  
  }
  
  for (const key in tableObj){
    tableMaker(tableObj[key])
  }
  // придать серый цвет
  var cells = document.querySelectorAll('.tableWrapper td:first-child');
  
  cells.forEach(function(cell){
      cell.style.color = 'grey'
  });
  
