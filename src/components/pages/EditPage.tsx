import React from 'react';
import {Grid, TextField} from "@material-ui/core";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {observer} from "mobx-react";
import { useStore } from '../../stores/store';

const EditPage = observer(() => {
    const store = useStore().getData;

    const mapData = (item) => Object.keys(item).map((key) => ({
        propName:key,
        propValue: item[key]
    }));

    const myList = (itemProps) => {
        const item: any = store[itemProps.index];
        return (
            <Grid key={itemProps.index} container style={{ border: "1px solid black"}}>
                <Grid container item spacing={3} justifyContent="center" style={{ margin: "5px"}}>
                    {mapData(item).map((labelItem) =>
                        (
                            <Grid item>
                                <TextField inputProps={{ readOnly: true }} label={labelItem.propName} value={labelItem.propValue}/>
                            </Grid>
                        ))}
                </Grid>
                <Grid container item spacing={3} justifyContent="center" style={{ margin: "5px"}}>
                    {mapData(item).map((labelItem) =>
                        (
                            <Grid item>
                                <TextField value={labelItem.propValue}/>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        )
    }



    return (
        <div>
            <AutoSizer style={{height: "100vh"}}>
                {({ height, width }) => (
                    <List
                        className="List"
                        height={height}
                        itemCount={store.length}
                        itemSize={35}
                        width={width}
                        itemData={store}
                    >
                        {myList}
                    </List>)}
            </AutoSizer>
        </div>
    )
})

export default EditPage;