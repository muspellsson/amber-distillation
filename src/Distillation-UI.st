Smalltalk createPackage: 'Distillation-UI'!
(Smalltalk packageAt: 'Distillation-UI') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Widget subclass: #EditableTable
	instanceVariableNames: 'data'
	package: 'Distillation-UI'!

!EditableTable methodsFor: 'accessing'!

data
	^ data
!

data: aData
	data := aData
! !

!EditableTable methodsFor: 'adding'!

addTable: aId
	Handsontable newValue: (document getElementById: aId)
		value: #{
			'data' -> data.
			'colHeaders' -> #(
				'Наименование'
				'Мольная доля'
				'Температура кипения, К'
				'Мольная теплота парообразования, кДж/моль'
				'Летучесть'
			).
			'contextMenu' -> #{
				'items' -> #{
					'row_above' -> #{
						'name' -> 'Вставить строку перед этой'
					}.
					'row_below' -> #{
						'name' -> 'Вставить строку после этой'
					}.
					'hsep1' -> '---------'.
					'remove_row' -> #{
						'name' -> 'Удалить строку'
					}
				}
			}.
			'className' -> 'htCenter'.
			'rowHeaders' -> true.
			'columns' -> {
				#{
					'type' -> 'text'
				}.
				#{
					'type' -> 'numeric'
				}.
				#{
					'type' -> 'numeric'
				}.
				#{
					'type' -> 'numeric'
				}.
				#{
					'type' -> 'numeric'
				}
			}
		}
! !

!EditableTable methodsFor: 'initialization'!

initialize
	super initialize.

	data := {}.
! !

!EditableTable methodsFor: 'rendering'!

renderOn: html
	| id |
	id := uuid value.
	html div id: id.
	self addTable: id
! !

!EditableTable class methodsFor: 'instance creation'!

on: aData
	^(EditableTable new data: aData)
! !

Widget subclass: #Footer
	instanceVariableNames: ''
	package: 'Distillation-UI'!

!Footer methodsFor: 'rendering'!

renderOn: html
	html footer class: 'footer';
		with: [
			html div class: 'container';
				with: [
					html p with: 'Example'
				]
		]
! !

Widget subclass: #HomePage
	instanceVariableNames: 'subheader col1text col2text col3text col4text page1'
	package: 'Distillation-UI'!

!HomePage methodsFor: 'accessing'!

page1: anObject

	page1 := anObject
! !

!HomePage methodsFor: 'initialization'!

initialize
	super initialize.

	subheader := 'Программный продукт позволяет строить области реализуемости различных процессов ректификации, находить
		оптимальный порядок разделения многокомпонентных смесей, вычислять максимальную производительность отдельной колонны
		и каскадов колонн, высчитывать минимальные затраты тепла на разделение при заданной производительности каскада.'.
		
	col1text := 'Построение области реализуемых нагрузок колонны бинарной (квазибинарной ректификации)'.
	
	col2text := 'Построение области реализуемых нагрузок и выбор порядка разделения трехкомпонентной смеси в каскаде
		из двух колонн бинарной ректификации'.
		
	col3text := 'Расчет максимальной производительности и нахождение соответствующего порядка разделения многокомпонентной смеси'.
	
	col4text := 'Расчет минимальных затрат теплоты и поиск соответствующего порядка разделения многокомпонентной смеси'
! !

!HomePage methodsFor: 'rendering'!

column1On: html
	html div class: 'col-xs-3';
		with: [ 
			html a with: [
				html h4 with: 'Бинарная ректификация »'
			];
			onClick: [
				'#main' asJQuery empty.
				page1 appendToJQuery: '#main' asJQuery
			]
		];
		with: [
			html p with: col1text
		]
!

column2On: html
	html div class: 'col-xs-3';
		with: [ 
			html a with: [
				html h4 with: 'Тернарная ректификация »' 
			]
		];
		with: [
			html p with: col2text
		]
!

column3On: html
	html div class: 'col-xs-3';
		with: [ 
			html a with: [
				html h4 with: 'Многокомпонентная ректификация: производительность »' 
			]
		];
		with: [
			html p with: col3text
		]
!

column4On: html
	html div class: 'col-xs-3';
		with: [ 
			html a with: [
				html h4 with: 'Многокомпонентная ректификация: затраты »'
			]
		];
		with: [
			html p with: col4text
		]
!

renderOn: html
	html p with: subheader.
	html div class: 'container-fluid';
		with: [ self rowOn: html ]
!

rowOn: html
	html div class: 'row row-eq-height';
		with: [ self column1On: html ];
		with: [ self column2On: html ];
		with: [ self column3On: html ];
		with: [ self column4On: html ]
! !

Widget subclass: #MainWindow
	instanceVariableNames: 'navbar homepage page1 footer'
	package: 'Distillation-UI'!

!MainWindow methodsFor: 'initialization'!

initialize
	super initialize.

	navbar := NavBar new.
	footer := Footer new.
	
	homepage := HomePage new.
	
	page1 := Page1 new.
	
	navbar homepage: homepage.
	
	homepage page1: page1
! !

!MainWindow methodsFor: 'rendering'!

renderOn: html
	navbar renderOn: html.
	html div id: 'main';
		with: [ homepage renderOn: html ].
	footer renderOn: html
! !

Widget subclass: #NavBar
	instanceVariableNames: 'homepage'
	package: 'Distillation-UI'!

!NavBar methodsFor: 'accessing'!

homepage
	^ homepage
!

homepage: anObject
	homepage := anObject
! !

!NavBar methodsFor: 'rendering'!

containerFluidOn: html
	html div class: 'container-fluid';
		with: [ self navbarHeaderOn: html ];
		with: [ self navbarOn: html ]
!

navbarHeaderOn: html
	html div class: 'navbar-header';
		with: [
			html a class: 'navbar-brand';
				href: '#';
				with: 'Ректификация';
				onClick: [
					'#main' asJQuery empty.
					homepage appendToJQuery: '#main' asJQuery
				]
		].
!

navbarHelpOn: html
	html li with: [ html a href: '#'; with: 'Руководство' ]
!

navbarHomeOn: html
	html li with: [ 
		html a href: '#';
			with: 'Главная';
			onClick: [
					'#main' asJQuery empty.
					homepage appendToJQuery: '#main' asJQuery
				]
	]
!

navbarOn: html
	html ul class: 'nav navbar-nav';
		with: [ self navbarHomeOn: html ];
		with: [ self navbarHelpOn: html ]
!

renderOn: html
	html nav class: 'navbar navbar-default'; with: [ self containerFluidOn: html ]
! !

Widget subclass: #Page1
	instanceVariableNames: 'table1 tab1Desc tab2Desc table2 tab3Desc table3'
	package: 'Distillation-UI'!

!Page1 methodsFor: 'initialization'!

initialize
	super initialize.
	
	tab1Desc := 'Введите данные о составе смеси, разделяемой в колонне. Коэффициенты летучести будут нормированы относительно самого
		низкокипящего компонента, для которого значение данного коэффициента будет принято за единицу.'.
	tab2Desc := 'Введите данные о составе верхнего продукта в таблицу 2.'.
	tab3Desc := 'Введите данные о составе нижнего продукта в таблицу 3.'.

	table1 := EditableTable on: { { } . { } }.
	table2 := EditableTable on: { { } }.
	table3 := EditableTable on: { { } }
! !

!Page1 methodsFor: 'rendering'!

renderOn: html
	| tr1 layout |
	html p with: tab1Desc.
	table1 renderOn: html.
	html p with: 'Таблица 1. Состав входной смеси'; style: 'font-style: italic;'.
	html p with: tab2Desc.
	table2 renderOn: html.
	html p with: 'Таблица 2. Состав верхнего продукта'; style: 'font-style: italic;'.
	html p with: tab3Desc.
	table3 renderOn: html.
	html p with: 'Таблица 3. Состав нижнего продукта'; style: 'font-style: italic;'.
	html div id: 'exa'; style: 'width: 480px; height: 400px;'.
	tr1 := #{
		'x' -> {1 . 2 . 3 .4}.
		'y' -> {10 . 15 . 13 . 17}.
		'mode' -> 'lines'
	}.
	layout := #{
		'title' -> 'Область реализуемости колонны бинарной ректификации'.
		'yaxis' -> #{
			'title' -> 'g<sub>F</sub>, моль/с'
		}.
		'xaxis' -> #{
			'title' -> 'q, кВт'
		}
	}.
	Plotly newPlot: 'exa' data: { tr1 } layout: layout
! !

