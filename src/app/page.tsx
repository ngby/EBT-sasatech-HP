import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<section className='-mt-16'>
				<div className={`relative h-auto pt-44 px-6 pb-40  
				
				before:bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-2400x1600_v-frms_webp_1cba9348-5174-4c01-8302-b557d2f04227_middle.webp)] 
				before:bg-cneter before:bg-cover before:brightness-[0.4] before:contrast-[1.3] 
				before:content-[''] before:block before:h-[496px] before:w-full before:absolute before:top-0 before:left-0 before:z-0
				md:pt-40
				`}>
					<div className='md:max-w-screen-lg md:mx-auto'>
						<h2 className='text-white text-lg  mb-4 z-10 relative leading-8 md:text-xl md:leading-[3rem]  md:font-bold'>テクノロジーを通して、<br />節度を持った革新を生み出す。</h2>
						<p className='text-white relative md:text-sm'>私たちは、ただ目新しいものを生み出すテックカンパニーではありません。節度を持ち、課題の本質を捉え、最適な形でのソリューションを生み出します。</p>
					</div>

				</div>
			</section>
			<section className='p-6 -mt-24 mb-12 md:-mt-8'>
				<div className='bg-white drop-shadow px-4 py-6 md:flex md:w-full md:max-w-screen-lg md:mx-auto'>
					<h2 className='text-sm  md:mr-4'>お知らせ</h2>
					<p className='text-sm text-green-700 md:hidden'>もっとみる</p>
					<div className='md:flex md:justify-between mr-8'>
						<p className='text-sm mb-1 '>date</p>
						<a className='text-sm'>テキストテキストテキストテキストテキストテキステキストテキスト</a>
					</div>
					<p className='text-sm text-green-700 hidden md:block'>もっとみる</p>
				</div>
			</section>
			<section className='grid grid-cols-2'>
				<div className=''>
					<div className={`bg-[url(https://images.unsplash.com/photo-1596079890744-c1a0462d0975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NDZ8fGNvbXBhbnl8ZW58MHx8fHwxNjQzMzY5MDc3&ixlib=rb-1.2.1&q=80&w=1080)] w-96 h-40 bg-cover bg-center md:w-full md:h-96`} />
				</div>
				<div className='py-6 px-8'>
					<p className='mb-4  text-xs text-green-700'>philosopyhy</p>
					<h2 className='mb-4 text-lg tracking-widest'>私たちは、テクノロジーを駆使して課題解決に取り組む企業です。</h2>
					<p className='text-sm mb-4'>インターネットが普及しスマートフォンを多くの人が持つようになった現代において、課題解決とテクノロジーは密接な関係にあります。<br />
						Sasatechでは、プログラミングやデザイン、マーケティングなど、あらゆる側面で課題解決の道を模索します。</p>
					<a className='text-sm text-green-700' href="">もっとみる</a>
				</div>
			</section>
			<section className={`max-w-full pt-32 px-8 pb-10 relative overflow-hidden`}>
				<div className={`relative before:content-[''] before:block before:h-96 before:w-[200%] before:absolute before:-top-12 before:left-0 before:z-0 before:bg-gray-200
				before:rotate-3 before:-translate-x-16 before:md:hidden
				md:max-w-screen-xl md:mx-auto md:px-0 md:pt-0 md:pb-0 
				`}>
					<div className='mb-14 z-10 relative'>
						<p className='text-xs mb-3'>business</p>
						<div className='flex items-center'>
							<h2 className='mr-4 text-xl text-whit tracking-widest'>事業内容</h2>
							<a className='text-sm  text-whit' href="">もっとみる</a>
						</div>
					</div>
					<div className='relative md:grid md:grid-cols-2 '>
						<div className='md:w-5/6 md:mr-1/6'>
							<div className={`bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1020x489_v-fs_webp_e4bf960a-4fc5-4017-aa52-dc613930a036.webp)]
							 bg-cover bg-center w-full h-60 mx-auto mb-7 md:w-full md:h-80`} />
							<div className='mb-7'>
								<h3 className='mb-1 text-sm'>エンターテイメント事業</h3>
								<p className="text-xs leading-5">メイドカフェ事業やアイドル事業などを始めとした、エンターテイメント領域のマーケティング支援やシステム開発を行っています。
								</p>
							</div>
						</div>
						<div className='md:w-5/6 md:pt-24 md:ml-1/6'>
							<div className={`bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1200x630_v-fms_webp_9235feb3-fff4-4a0c-be81-80803b332ad7_middle.webp)] 
							bg-cover bg-center w-full h-60 mx-auto mb-7 md:w-full md:h-80 `} />
							<div className='mb-7'>
								<h3 className='mb-1 text-sm'>月額制Web制作サービス「kumitoru」の開発, 運営</h3>
								<a className='mb-1 text-sm text-green-700' href="kumitorul.com">https://kumitoru.com/</a>
								<p className="text-xs leading-5">初期費用なしかつ格安の月額制で、お客様の意図を汲み取ったオリジナルのホームページを制作します。</p>
							</div>
						</div>
						<div className='md:w-5/6  md:ml-12'>
							<div className={`bg-[url(https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8OHx8cHJvZ3JhbXxlbnwwfHx8fDE2NDM0NDE4MDU&ixlib=rb-1.2.1&q=80&w=1080)] 
							bg-cover bg-center w-full h-60 mx-auto mb-7 md:w-full md:h-80`} />
							<div className='mb-7'>
								<h3 className='mb-1 text-sm'>WEBアプリケーションの開発, 運用</h3>
								<p className="text-xs leading-5">「国内メディアのシステム開発」「大手金融機関のホームページ制作」「芸能事務所の社内向けツールの開発」など、主にNuxtを用いて様々なWebアプリケーションを開発・運用しています。
								</p>
							</div>
						</div>
						<div className='md:w-5/6 md:mt-24 md:ml-16'>
							<div className={`bg-[url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTB8fGRhdGF8ZW58MHx8fHwxNjQzNTE3ODQz&ixlib=rb-1.2.1&q=80&w=1080)] bg-cover bg-center w-full h-60 mx-auto mb-7 md:w-full md:h-80`} />
							<div className='mb-7'>
								<h3 className='mb-1  text-sm'>金融領域をはじめとしたデータ分析</h3>
								<p className="text-xs leading-5">金融機関の売買審査のアルゴリズム制作、AWS・GCPを使用したビックデータの構築を行っています。</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='p-4 md:p-0'>
				<div className='grid gap-4 md:grid-cols-2 md:gap-0 md:h-80'>
					<div className={`bg-[url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTB8fGRhdGF8ZW58MHx8fHwxNjQzNTE3ODQz&ixlib=rb-1.2.1&q=80&w=1080)] 
					bg-cover bg-center brightness-[0.8] px-6 py-10 md:flex md:justify-center items-center
					`}>
						<div className='border-b-2 px-4 py-6  md:w-96 md:h-24 '>
							<p className='text-white w-full text-sm mb-2 brightness-[1.5]'>お問い合わせ</p>
							<h3 className='text-white w-full  text-xl '>Contact us</h3>
						</div>
					</div>
					<div className={`bg-[url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c3VpdHN8ZW58MHx8fHwxNjQzNjk2MTU1&ixlib=rb-1.2.1&q=80&w=1080)] 
					bg-cover bg-center brightness-[0.8] px-6 py-10 md:flex md:justify-center items-center`}>
						<div className='border-b-2 px-4 py-6 md:w-96 md:h-24'>
							<p className='text-white w-full text-sm  mb-2'>採用情報</p>
							<h3 className='text-white w-full text-xl '>Recruit</h3>
						</div>
					</div>

				</div>
			</section>
		</main>
	)
}
