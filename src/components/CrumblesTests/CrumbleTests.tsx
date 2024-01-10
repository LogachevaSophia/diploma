import React from "react";
import  "./styles.css"

const CrumblesTests = ({ items }: { items: Array<any> }) => {
    const itemss = [1, 2, 3]
    return (
        <div className="crumbles">
            {itemss.map((el, index) => {
                return (
                    <div className="item" key={index}>
                        <span>
                           {index+1}
                        </span>
                    </div>
                )
            })}
            {/* {itemss.map((el, index)=>{
            <div className={styles.item}>
                <span>
                   HII
                </span>
            </div>
        })} */}
        </div>
    )

}

export default CrumblesTests