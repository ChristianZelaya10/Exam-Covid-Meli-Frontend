const themeStyles = ({ breakpoints }) => ({
    root: {
        padding: 24
    },
    paper: {
        padding: 15
    },
    font: {
        letterSpacing: 0
    },
    typography: {
        color: '#1C1C1C',
        letterSpacing: 0,
        fontFamily: 'Montserrat',
        fontSize: '0.9em',
        textAlign: 'left'
    },
    listItem: {
        paddingTop: 8,
        paddingBottom: 8,
        maxHeight: 45
    },
    listItemIcon: {
        minWidth: 40
    },
    saveButton: {
        backgroundColor: '#27AE60',
        '&:hover': {
            backgroundColor: '#219050',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        height: '2.4em',
        color: 'white',
    },
    deleteButton: {
        backgroundColor: 'rgb(212, 118, 108)',
        '&:hover': {
            backgroundColor: 'rgb(202, 87, 74)',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        height: '2.4em',
        color: 'white',
        marginLeft: 10
    },
    cancelButton: {
        color: '#1065C5',
        backgroundColor: '#EEEEEE',
        '&:hover': {
            backgroundColor: '#DADADA',
            boxShadow: 'none',
        },
        height: '2.4em',
        marginLeft: 10
    },
    searchButton:{
        width: '150px',
        marginRight:'3px',
        backgroundColor: '#EEEEEE',
        '&:hover': {
            backgroundColor: '#DADADA',
            boxShadow: 'none',
        },
        height: '2.4em'
    },
    searchSpecimenButton:{
        backgroundColor: '#EEEEEE',
        '&:hover': {
            backgroundColor: '#DADADA',
            boxShadow: 'none',
        },
    },
    gridButton: {
        fontSize: '0.8em',
        letterSpacing: 0,
        color: '#FFFFFF',
        marginBlockEnd: '10px'
    },
    title: {
        color: '#5A5A5A',
        letterSpacing: 0,
        fontSize: '1.2em',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    filter: {
        width: '100%',
        opacity: '1',
        marginBottom: '10px',
    },
    divider: {
        width: '100%'
    },
    iconEdit: {
        color: 'black'
    },
    iconDelete: {
        color: 'red'
    },
    iconSee: {
        color:'primary'
    },
    tooltip: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: '10px 5px 5px black',
        fontSize: 11,
    },
    buttonNewElement: {
        color: '#27AE60',
        marginBlockEnd: '10px'
    },
    table: {
        width: '100%',
        overflowX: 'auto'
    },
    tableHead: {
        backgroundColor: '#EAEAEA',
        fontWeight: 'bold'
    },
    tableHeadTypography: {
        fontWeight: 'bold',
        fontSize: 'inherit',
        cursor: 'pointer',
        padding: 3
    },
    resizer: {
        display: 'inline-block',
        backgroundColor: 'white',
        width: 2,
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    isResizing: {
        backgroundColor: 'rgb(241,99,18)'
    },
    SortBy: {
        verticalAlign: 'middle'
    },
    DividerVertical: {
        width: '2px',
        marginRight: '15px'
    },
    Typography_Pagination: {
        alignSelf: 'center',
        paddingRight: 5
    },
    Select_Pagination: {
        marginTop: '10px'
    },
    Container_Pagination: {
        display: 'flex'
    },
    iconCheck: {
        borderRadius: 3,
        width: 10,
        height: 10,

    },
    column: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    lineBreak: {
        whiteSpace: 'pre-line'
    },
    buttonGroup :{
        backgroundColor: 'rgb(81, 132, 156)',
                        //margin: '10px',
                        padding: 0,
                        borderRadius: '10px',
                        borderImage: 'none',
                        '&:hover':{
                            backgroundColor: '#aaaa',
                            //cursor:pointer,
                        }
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
    }
});

export default themeStyles;