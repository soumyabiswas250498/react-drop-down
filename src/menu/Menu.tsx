import React, { useState } from 'react'
import Portal from './Portal';
import { usePopper } from 'react-popper';

const menuData = [
    {
        title: 'menu', path: '/menu', subMenu: [
            { title: 'submenu1', path: '/submenu1' },
            { title: 'submenu2', path: '/submenu2' },
            { title: 'submenu3', path: '/submenu3' },
        ]
    }
]

function SubMenu(props: any) {
    const { data } = props;
    console.log(data)
    return (
        <>
            <div className='absolute z-20 text-md border-[1px] border-blue-500 p-1 cursor-pointer select-none'>
                {data.map((item: any, index: number) => <div key={index} className='border-[1px] border-slate-500 m-1 p-2'>{item.title}</div>)}
            </div>
        </>
    )
}

export default function Menu() {
    const [showSubmenu, setShowSubmenu] = useState(false);
    let [refEl, setRefEl]: any = useState();
    let [popEl, setPopEl]: any = useState();
    console.log(showSubmenu)
    const { styles, attributes } = usePopper(refEl, popEl, { placement: 'auto-end' })

    return (
        <div
            onMouseEnter={(e) => { e.stopPropagation(); setShowSubmenu(true) }}
            onMouseLeave={(e) => { e.stopPropagation(); setShowSubmenu(false) }}
            className='relative cursor-pointer select-none' ref={setRefEl}
        >
            <div className='my-2'>Menu</div>
            {showSubmenu &&
                <Portal>
                    <div ref={setPopEl} style={styles.popper} {...attributes.popper}>
                        <SubMenu data={menuData[0].subMenu} />
                    </div>

                </Portal>}
        </div>

    )
}
