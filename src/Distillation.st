Smalltalk createPackage: 'Distillation'!
(Smalltalk packageAt: 'Distillation') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #Component
	instanceVariableNames: 'name x T r alpha'
	package: 'Distillation'!

!Component methodsFor: 'accessing'!

T
	^ T
!

T: anObject
	T := anObject
!

alpha
	^ alpha
!

alpha: anObject
	alpha := anObject
!

name
	^ name
!

name: anObject
	name := anObject
!

r
	^ r
!

r: anObject
	r := anObject
!

x
	^ x
!

x: anObject
	x := anObject
! !

Object subclass: #Distillation
	instanceVariableNames: ''
	package: 'Distillation'!

!Distillation class methodsFor: 'starting'!

start
	MainWindow new appendToJQuery: 'body' asJQuery
! !

Object subclass: #Mixture
	instanceVariableNames: 'components'
	package: 'Distillation'!

!Mixture methodsFor: 'accessing'!

of
	^ components
!

of: aComponents
	components := aComponents
! !

!Mixture methodsFor: 'as yet unclassified'!

gibbsEnergyAt: i
	| xF TD |
	xF := 0.
	TD := (components at: i) T.
	(components copyFrom: 1 to: i) collect: [:e | xF := (xF + e x)].
	^ -8.31 * TD * (((xF ln) * xF) + ((1 - xF) * ((1 - xF) ln)))
!

gibbsEnergyAt: i xB: xB xD: xD
	| xF TD eps ln1 ln2 ln3 |
	xF := 0.
	TD := (components at: i) T.
	(components copyFrom: 1 to: i) collect: [:e | xF := (xF + e x)].
	eps := (xF - xB) / (xD - xB).
	ln1 := ((xF ln) * xF) + ((1 - xF) * ((1 - xF) ln)).
	ln2 := ((xB ln) * xB) + ((1 - xB) * ((1 - xB) ln)).
	ln3 := ((xD ln) * xD) + ((1 - xD) * ((1 - xD) ln)).
	^ -8.31 * TD * (ln1 - ((1 - eps) * ln2) - (eps * ln3))
!

revEff: i
	| TB TD AG |
	TD := (components at: i) T.
	TB := (components at: (i + 1)) T.
	AG := self gibbsEnergyAt: i.
	^ (TB - TD) / (TB * AG)
!

revEff: i xB: xB xD: xD
	| TB TD AG |
	TD := (components at: i) T.
	TB := (components at: (i + 1)) T.
	AG := self gibbsEnergyAt: i xB: xB xD: xD.
	^ (TB - TD) / (TB * AG)
! !

