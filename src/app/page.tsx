'use client';

import { motion } from 'framer-motion';
import { Crown, ShieldCheck, Gem, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="bg-[#FAFAFA] text-[#1A1A1A] font-serif selection:bg-[#B8907A] selection:text-white pb-32">
      
      {/* 1. Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-xs md:text-sm tracking-[0.4em] text-[#B8907A] uppercase mb-8 font-serif">
            The Exclusive Medical Concierge in Seoul
          </motion.h2>
          
          <motion.div variants={fadeIn} className="mb-12 flex justify-center">
            <Image src="/Logotextremovebg.png" alt="APC Seoul" width={256} height={256} className="h-40 md:h-64 object-contain" />
          </motion.div>

          <motion.p variants={fadeIn} className="text-lg md:text-xl tracking-widest font-serif font-bold mb-8">
          韓国上位1%の美容医療を、絶対的な安全とVIP待遇で
          </motion.p>
          
          <motion.p variants={fadeIn} className="text-sm md:text-base text-gray-500 tracking-wide font-serif">
            見知らぬ異国で、貴方の「美」と「時間」を担保に冒険をしないでください。
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Core Values */}
      <section className="py-20 px-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { icon: Crown, title: 'VIP Fast-Track', desc: '同一価格の絶対保証と、\n待機時間ゼロの最優先アクセス。' },
              { icon: ShieldCheck, title: 'Legal Shield', desc: '万が一の医療トラブル時、\n100%代行および再手術交渉サポート。' },
              { icon: Gem, title: 'Full-Concierge', desc: 'リムジン送迎、5つ星ホテル手配、\n1対1の専門医療通訳アテンド。' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="text-center p-6">
                <item.icon className="w-8 h-8 text-[#B8907A] mx-auto mb-6" strokeWidth={1} />
                <h4 className="text-lg font-medium mb-3 tracking-wide">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* 노션 링크 1: LINE 버튼과 동일한 알약 형태(pill-shape)의 로즈골드 버튼 */}
          <motion.div variants={fadeIn} className="text-center">
            <a 
              href="https://productive-equinox-433.notion.site/APC-Seoul-2fd289bde626809e83a2dc415e2e8da7?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#B8907A] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#a67d67] transition-colors"
            >
              <span className="font-medium tracking-wide text-sm">詳細内容はこちら</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Clinic Network */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.h3 variants={fadeIn} className="text-2xl text-center font-light mb-16 tracking-widest font-serif">
            Exclusive Clinic Network
          </motion.h3>

          <div className="space-y-12 mb-16">
            {[
              { 
                title: 'Masterpiece Anti-Aging', 
                jpTitle: '永遠の若さと完璧な輪郭の再構築', 
                items: [
                  'ハイエンド切開リフト（SMAS挙上術）', 
                  '失敗のない顔面輪郭再手術・骨切り術', 
                  '3Dプリンター活用オーダーメイド鼻整形',
                  '非切開目つき矯正・目頭/目尻切開リドゥ',
                  '額の縮小術・ヘアラインデザイン矯正',
                  'プレミアム糸リフト・輪郭フィラー', 
                  '貴族手術・鼻唇溝（ほうれい線）プロテーゼ',
                  '血液幹細胞アンチエイジング', 
                  '自家脂肪移植 / 非切開毛髪移植', 
                  '中顔面リフト / 上下眼瞼（まぶた）たるみ取り', 
                  '無痛麻酔による全顔若返りマスタープログラム'
                ] 
              },
              { 
                title: 'Premium Dermatology', 
                jpTitle: '上位1%のための肌管理と細胞再生', 
                items: [
                  '痛みのない高周波サーマクールFLX',
                  '次世代リフティング（ソフウェーブ、BBL等）', 
                  'VIP肌質矯正・重度の色素治療・傷跡修正', 
                  'エクソソーム・サーモン注射（PDRN）プレミアム配合',
                  '首のシワ専用フィラー＆ボトックス',
                  '自家細胞幹細胞スキンブースター', 
                  '血液クレンジング（デトックス浄化療法）', 
                  '血液検査に基づくカスタムビタミン点滴処方', 
                  '難治性ニキビ跡・クレーター根本治療プログラム', 
                  '毛穴縮小・弾力改善VIP専用レーザー施術'
                ] 
              },
              { 
                title: 'Body Silhouette & Secret Care', 
                jpTitle: '完璧なプロポーションと自信の回復', 
                items: [
                  '360度3Dボディスカルプティング（彫刻脂肪吸引）',
                  '傷跡の残らない非切開豊胸（脂肪注入・幹細胞）',
                  'ハイエンド豊胸手術（自然なラインと触感の復元）', 
                  '産後腹部リフティング・たるみ除去手術', 
                  'ミドルエイジ・ゴルフフィット（ボディリフティング）', 
                  '男性向け女性化乳房（男性の胸の膨らみ）矯正',
                  '肩こり・僧帽筋ボトックス（美しいデコルテライン）',
                  'VIPシークレットケア（膣圧改善レーザー、膣フィラー）', 
                  'プレミアム肥満治療・サイエンス・ボディマネジメント', 
                  'ヒップアップコラーゲン注射＆骨盤ラインデザイン', 
                  '経営者のための無理のない健康ボディマネジメント'
                ] 
              },
              { 
                title: 'Executive Detail Care', 
                jpTitle: 'ディテールに宿る圧倒的な品格', 
                items: [
                  '非切開・高生着率 VIP専用自毛植毛', 
                  '1日完成インプラント（VIPファストトラック）',
                  '無削除ラミネート（審美歯科・セラミック）', 
                  '歯茎のホワイトニング・ガミースマイル矯正',
                  'グローバルリーダーのためのスマイルラインデザイン', 
                  'VIPプレミアム総合健康診断（大学病院クラス）', 
                  '脳ドック・心血管精密MRI検診',
                  '睡眠時の詳細ドック（待ち時間ゼロのファストトラック）', 
                  '口腔内幹細胞保管サービス', 
                  '完全個室でのプライベート検診および専属通訳同行'
                ] 
              }
            ].map((cat, idx) => (
              <motion.div key={idx} variants={fadeIn} className="border-b border-gray-200 pb-8">
                <h4 className="text-lg font-medium text-[#B8907A] mb-4 font-serif">
                  {cat.title} <br/> <span className="text-sm text-gray-500 font-normal italic mt-1 inline-block">{cat.jpTitle}</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.items.map((item, i) => (
                    <span key={i} className="text-sm text-gray-700 block">• {item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 노션 링크 2: LINE 버튼과 동일한 알약 형태 */}
          <motion.div variants={fadeIn} className="text-center">
            <a 
              href="https://productive-equinox-433.notion.site/1-2fd289bde62680588a14d5dc76dc1edc?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#B8907A] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#a67d67] transition-colors"
            >
              <span className="font-medium tracking-wide text-sm">詳細内容はこちら</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Process & Pricing */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="max-w-4xl mx-auto text-center">
          <motion.h3 variants={fadeIn} className="text-2xl font-light mb-12 tracking-widest font-serif">
            Seamless Process
          </motion.h3>
          
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 text-sm text-gray-400 mb-16 font-serif whitespace-nowrap">
            <div className="text-center"><span className="text-[#B8907A] block mb-2">Step 1</span><strong className="font-bold text-white tracking-wide">オンライン相談</strong></div>
            <div className="hidden md:block pt-6">→</div>
            <div className="text-center"><span className="text-[#B8907A] block mb-2">Step 2</span><strong className="font-bold text-white tracking-wide">ポートフォリオ提案</strong></div>
            <div className="hidden md:block pt-6">→</div>
            <div className="text-center"><span className="text-[#B8907A] block mb-2">Step 3</span><strong className="font-bold text-white tracking-wide">VIP予約・渡航</strong></div>
            <div className="hidden md:block pt-6">→</div>
            <div className="text-center"><span className="text-[#B8907A] block mb-2">Step 4</span><strong className="font-bold text-white tracking-wide">密着エスコート・手術</strong></div>
            <div className="hidden md:block pt-6">→</div>
            <div className="text-center"><span className="text-[#B8907A] block mb-2">Step 5</span><strong className="font-bold text-white tracking-wide">帰国後アフターケア</strong></div>
          </motion.div>

          <motion.p variants={fadeIn} className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed mb-16 font-serif">
            ※ 手配手数料・通訳費用などの追加費用は一切発生しません。<br/>
            韓国国内の患者様と完全に同一の公式価格で、すべてのVIP特権をご提供します。
          </motion.p>

          {/* 노션 링크 3: LINE 버튼과 동일한 알약 형태 */}
          <motion.div variants={fadeIn} className="text-center">
            <a 
              href="https://productive-equinox-433.notion.site/325289bde62680b9b7b5e809d306787d?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#B8907A] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#a67d67] transition-colors"
            >
              <span className="font-medium tracking-wide text-sm">詳細内容はこちら</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating CTA */}
      <motion.a
        href="https://lin.ee/BTksVSm"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        className="fixed bottom-8 right-8 bg-[#B8907A] text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-3 hover:bg-[#a67d67] transition-colors z-50 group"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium tracking-wide text-sm">LINE 相談</span>
      </motion.a>
    </main>
  );
}