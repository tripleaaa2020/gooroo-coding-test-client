import React, { Suspense } from 'react';
import './MyBooks.scss';

import TitleSection from '../../../sections/TitleSection';
import ListControlSection from '../../../sections/ListControlSection';
import ListSection from '../../../sections/ListSection';

const MyBooksContainer = props => {

    console.log("Homepage props => ", props);

    return (
        <Suspense fallback={<div className="lds-ring mt-2"><div></div><div></div><div></div><div></div></div>}>
            <div className="position-relative h-100 d-flex flex-column" style={{ minHeight: '745px' }}>
                <TitleSection
                    {...props}
                    title="My Books"
                    subtitle="Take a look at your current collection!!"
                />
                <ListControlSection
                    {...props}
                    from="MyBooks"
                />
                <ListSection
                    {...props}
                    from="MyBooks"
                />
            </div>
        </Suspense>
    )
}
export default MyBooksContainer