import { NextRouter, useRouter } from "next/router";
//*Router - Query Parameters from URL

const Fragment = () => {

    const router: NextRouter = useRouter();
    const {id} = router?.query;

    return <h1>This is for {id}</h1>
}

export default Fragment;

//* [brackets] - dynamic route

