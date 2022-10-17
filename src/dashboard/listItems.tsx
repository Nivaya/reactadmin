import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function MainListItems() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            {/*<List>*/}
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="首页"/>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ShoppingBagIcon/>
                </ListItemIcon>
                <ListItemText primary="订单"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon>
                            <ShoppingBagIcon/>
                        </ListItemIcon>
                        <ListItemText primary="零星订单"/>
                    </ListItemButton>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon>
                            <ShoppingBagIcon/>
                        </ListItemIcon>
                        <ListItemText primary="批量订单"/>
                    </ListItemButton>
                </List>
            </Collapse>
            {/*<ListItemButton>*/}
            {/*  <ListItemIcon>*/}
            {/*    <PeopleIcon />*/}
            {/*  </ListItemIcon>*/}
            {/*  <ListItemText primary="Customers" />*/}
            {/*</ListItemButton>*/}
            {/*<ListItemButton>*/}
            {/*  <ListItemIcon>*/}
            {/*    <BarChartIcon />*/}
            {/*  </ListItemIcon>*/}
            {/*  <ListItemText primary="Reports" />*/}
            {/*</ListItemButton>*/}
            {/*<ListItemButton>*/}
            {/*  <ListItemIcon>*/}
            {/*    <LayersIcon />*/}
            {/*  </ListItemIcon>*/}
            {/*  <ListItemText primary="Integrations" />*/}
            {/*</ListItemButton>*/}
            {/*</List>*/}
        </React.Fragment>
    )
}

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Current month"/>
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Last quarter"/>
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale"/>
//         </ListItemButton>
//     </React.Fragment>
// );
