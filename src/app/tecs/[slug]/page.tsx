export default function Page({params}: {params: {slug:string}}) {
    const slug = params.slug;


    return <div>Hello {slug}</div>;
    
}


