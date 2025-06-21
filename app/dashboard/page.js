import { cookies } from "next/headers";

export async function getUserInfo() {
  const cookieStore =  await cookies();
  const userInfo = JSON.parse(cookieStore.get("userinfo")?.value || "{}");

  if (!userInfo.name) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { userInfo },
  };
}

async function page(props) {
    console.log("propss", await props.userInfo)
  return (
    <div>page</div>
  )
}

export default page