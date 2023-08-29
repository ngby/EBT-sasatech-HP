export default function Header() {
	return (
		<header className="h-16 z-20 relative px-6 pt-10
		md:h-8">
			<div className="flex justify-between max-w-full">
				<img className="w-32 md:h-8" src="https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1836x480_v-frms_webp_1692d9e6-9043-4fa7-86e1-7bfee123fb48_small.webp" alt="" />
				<button className="md:hidden text-white text-xl">
					三
				</button>	
				<ul className="hidden  md:grid grid-cols-5 gap-3 text-center">
					<li >
						<a className="text-white text-sm" href="">トップ</a>
					</li>
					<li>
						<a className="text-white text-sm" href="">私たちについて</a>
					</li>
					<li>
						<a className="text-white text-sm" href="">事業内容</a>
					</li>
					<li>
						<a className="text-white text-sm" href="">お知らせ</a>
					</li>
					<li>
						<a className="text-white text-sm" href="">お問い合わせ</a>
					</li>
				</ul>
			</div>
		</header>
	)
}