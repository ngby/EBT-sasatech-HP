export default function Footer() {
	return (
		<footer className="border-t-2">
			<div className="p-6 pb-8">
				<div className="mb-3 md:flex md:justify-between md:max-w-screen-xl md:mx-auto">
					<div>
						<p className='traching-widest mb-4'>合同会社SasaTech</p>
						<p className='text-xs text-gray-400 mb-1'>〒150-0002</p>
						<p className='text-xs text-gray-400 mb-1'>東京都渋谷区渋谷2-19-15</p>
						<p className='text-xs text-gray-400 mb-1'>宮益坂ビルディング609</p>
					</div>

					<ul className="hidden  md:grid grid-cols-5 gap-3 text-center ">
						<li >
							<a className=" text-sm" href="">トップ</a>
						</li>
						<li>
							<a className=" text-sm" href="">私たちについて</a>
						</li>
						<li>
							<a className=" text-sm" href="">事業内容</a>
						</li>
						<li>
							<a className=" text-sm" href="">お知らせ</a>
						</li>
						<li>
							<a className=" text-sm" href="">お問い合わせ</a>
						</li>
					</ul>
				</div>
				<p className='text-sm text-end'>©2021 SasaTech</p>
			</div>
		</footer>
	)
}