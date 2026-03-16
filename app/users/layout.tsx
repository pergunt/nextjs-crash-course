import Link from "next/link";

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={'border-2 border-gray-200 rounded-md overflow-hidden p-4'}
      >
        <h2 className='text-center text-green-500'>
          Users layout
        </h2>
        {children}
      </div>
  );
}
