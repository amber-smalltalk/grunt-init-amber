Smalltalk createPackage: '{%= name %}'!
Object subclass: #{%= name %}
	instanceVariableNames: ''
	package: '{%= name %}'!

!{%= name %} methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
! !

!{%= name %} methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!ApplicationOrLibraryTitle class methodsFor: 'starting'!

start
	self new augmentPage
! !

