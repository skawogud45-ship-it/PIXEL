/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, Instagram, ArrowRight, 
  CheckCircle2, ShieldCheck, Zap, Users, 
  LayoutGrid, Monitor, Settings, PlayCircle,
  Plus, Trash2, Edit, LogIn
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '포트폴리오', path: '/#portfolio' },
    { name: '서비스', path: '/#services' },
    { name: '문의하기', path: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          PIXEL
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/admin" 
            className="p-2 text-gray-500 hover:text-white transition-colors"
            title="관리자 페이지"
          >
            <Settings size={18} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <Link to="/admin" onClick={() => setIsOpen(false)} className="text-gray-400">관리자</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-60"
          alt="Hero background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      </div>

      {/* Watermark Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none overflow-hidden" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='80' viewBox='0 0 150 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-weight='900' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPIXEL%3C/text%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat'
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-6">
            PIXEL IN CONTROL
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
            Precision LED Installation<br />
            <span className="text-red-600">& Visual Execution</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            10년 현장 경험, 무사고 운영의 신뢰.<br />
            단순 설치를 넘어 완벽한 현장 운영을 책임집니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              포트폴리오 보기 <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-sm hover:bg-white/20 transition-all">
              견적 문의하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { label: '현장 경험', value: '10년+', icon: <Zap className="text-red-500" /> },
    { label: '프로젝트 수행', value: '1000+', icon: <LayoutGrid className="text-red-500" /> },
    { label: '무사고 운영', value: '100%', icon: <ShieldCheck className="text-red-500" /> },
    { label: '전문 인력', value: '15명+', icon: <Users className="text-red-500" /> },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 glass-morphism rounded-xl"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">무사고 운영 원칙</h3>
            <p className="text-gray-400 leading-relaxed">
              모든 현장에서 안전을 최우선으로 합니다. 철저한 사전 점검과 현장 모니터링을 통해 10년간 단 한 건의 사고 없이 프로젝트를 완수했습니다.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">긴급 대응 시스템</h3>
            <p className="text-gray-400 leading-relaxed">
              현장 변수는 예측할 수 없습니다. 하지만 대응은 가능합니다. PIXEL은 모든 장비의 백업 시스템과 즉각 대응 가능한 전문 엔지니어를 상시 배치합니다.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">현장 문제 해결 능력</h3>
            <p className="text-gray-400 leading-relaxed">
              단순한 오퍼레이팅이 아닙니다. 시스템 설계부터 현장 트러블슈팅까지, 어떤 상황에서도 정상 송출을 유지하는 것이 우리의 실력입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = ({ items }: { items: PortfolioItem[] }) => {
  const [filter, setFilter] = useState<string>('all');
  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'concert', name: '콘서트/페스티벌' },
    { id: 'corporate', name: '기업행사' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">포트폴리오</h2>
            <p className="text-gray-500">PIXEL이 만들어낸 압도적인 현장의 기록입니다.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === cat.id ? "bg-white text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative glass-morphism rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{item.description}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-white/5 mt-auto">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">장비</span>
                      <span className="font-medium">{item.equipment}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'LED 설치 및 구축',
      desc: '공연, 전시, 기업 행사에 최적화된 대형 LED 스크린 설치 및 구조물 설계.',
      icon: <LayoutGrid size={32} />,
      features: ['실내외 P2.6 ~ P10 라인업', '커브드/비정형 설치 가능', '안전 구조물 설계']
    },
    {
      title: '영상 오퍼레이팅',
      desc: '하이엔드 장비를 활용한 정밀한 영상 송출 및 연출.',
      icon: <Monitor size={32} />,
      features: ['실시간 큐시트 대응', '멀티 레이어 합성', '서버급 콘솔장비 운영']
    },
    {
      title: '시스템 통합 설계',
      desc: '복잡한 영상 신호 체계를 안정적으로 통합하여 사고 없는 시스템 구축.',
      icon: <Settings size={32} />,
      features: ['신호 이중화(Backup)', '광전송 시스템 구축', '현장 기술 지원']
    },
    {
      title: '중계 및 라이브 송출',
      desc: '고화질 카메라 중계 및 유튜브/줌 등 다양한 플랫폼 라이브 스트리밍.',
      icon: <PlayCircle size={32} />,
      features: ['4K 중계 시스템', '안정적인 네트워크 확보', '실시간 자막/CG 연동']
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">전문 서비스</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">PIXEL은 단순한 장비 렌탈이 아닌, 현장의 성공을 위한 토탈 솔루션을 제공합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 glass-morphism rounded-3xl flex flex-col md:flex-row gap-8 hover:border-white/20 transition-all"
            >
              <div className="text-red-500 shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-red-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">함께 시작할까요?</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              프로젝트의 규모와 상관없이 최상의 안정성을 약속드립니다.<br />
              일정, 장소, 원하시는 구성을 남겨주시면 24시간 내에 전문 엔지니어가 답변 드립니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-red-500">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">문의</div>
                  <div className="text-xl font-bold">010-8829-5270</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-red-500">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">이메일</div>
                  <div className="text-xl font-bold">skawogud45@naver.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-10 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">담당자 성함</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-all" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">연락처</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-all" placeholder="010-0000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">행사 일정 및 장소</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-all" placeholder="2024년 10월 / 서울 코엑스" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">문의 내용</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-all" placeholder="LED 규모, 운영 범위 등 상세 내용을 적어주세요."></textarea>
              </div>
              <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all">
                빠른 견적 받기
              </button>
              <p className="text-center text-xs text-gray-500 italic">
                * 24시간 내 답변 / 급한 일정 대응 가능
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Admin Panel ---

const AdminPanel = ({ portfolio, setPortfolio }: { portfolio: PortfolioItem[], setPortfolio: (items: PortfolioItem[]) => void }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleLogin = () => {
    if (password === '1111') {
      setIsLoggedIn(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setPortfolio(portfolio.filter(p => p.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem: PortfolioItem = {
      id: editingItem?.id || Date.now().toString(),
      title: formData.get('title') as string,
      location: formData.get('location') as string,
      date: formData.get('date') as string,
      description: formData.get('description') as string,
      equipment: formData.get('equipment') as string,
      imageUrl: uploadedImage || formData.get('imageUrl') as string || 'https://picsum.photos/seed/new/1200/800',
      category: formData.get('category') as any,
    };

    if (editingItem) {
      setPortfolio(portfolio.map(p => p.id === editingItem.id ? newItem : p));
    } else {
      setPortfolio([newItem, ...portfolio]);
    }
    setEditingItem(null);
    setUploadedImage(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="w-full max-w-md glass-morphism p-10 rounded-3xl space-y-8">
          <div className="text-center">
            <LogIn className="mx-auto mb-4 text-red-500" size={48} />
            <h2 className="text-3xl font-bold">Admin Access</h2>
            <p className="text-gray-500">관리자 비밀번호를 입력하세요.</p>
          </div>
          <div className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
              placeholder="••••"
            />
            <button 
              onClick={handleLogin}
              className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200"
            >
              로그인
            </button>
          </div>
          <Link to="/" className="block text-center text-sm text-gray-500 hover:text-white">메인으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold">포트폴리오 관리</h1>
            <p className="text-gray-500">현장의 기록을 업데이트하세요.</p>
          </div>
          <button 
            onClick={() => {
              setEditingItem({ id: '', title: '', location: '', date: '', description: '', equipment: '', imageUrl: '', category: 'concert' });
              setUploadedImage(null);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
          >
            <Plus size={18} /> 새 프로젝트 추가
          </button>
        </div>

        {editingItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl p-10 overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{editingItem.id ? '프로젝트 수정' : '새 프로젝트'}</h2>
                <button onClick={() => setEditingItem(null)}><X /></button>
              </div>
              <form onSubmit={handleSave} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">프로젝트명</label>
                    <input name="title" defaultValue={editingItem.title} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500">장소</label>
                      <input name="location" defaultValue={editingItem.location} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500">날짜</label>
                      <input name="date" defaultValue={editingItem.date} placeholder="2024.05" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">카테고리</label>
                    <select name="category" defaultValue={editingItem.category} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                      <option value="concert">콘서트/페스티벌</option>
                      <option value="corporate">기업행사</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">이미지 업로드</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm" />
                    {uploadedImage && (
                      <div className="mt-2 aspect-video rounded-lg overflow-hidden border border-white/10">
                        <img src={uploadedImage} className="w-full h-full object-cover" alt="Preview" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">또는 이미지 URL</label>
                    <input name="imageUrl" defaultValue={editingItem.imageUrl} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2" placeholder="https://..." />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">사용 장비</label>
                    <input name="equipment" defaultValue={editingItem.equipment} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500">설명</label>
                    <textarea name="description" defaultValue={editingItem.description} rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2" />
                  </div>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200">
                    저장하기
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        <div className="grid gap-4">
          {portfolio.map(item => (
            <div key={item.id} className="glass-morphism p-6 rounded-2xl flex items-center gap-6">
              <img src={item.imageUrl} className="w-24 h-16 object-cover rounded-lg" alt="" referrerPolicy="no-referrer" />
              <div className="flex-1">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.location} | {item.date}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditingItem(item)} className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"><Edit size={18} /></button>
                <button onClick={() => handleDelete(item.id)} className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

const MainPage = ({ portfolio }: { portfolio: PortfolioItem[] }) => {
  return (
    <main>
      <Hero />
      <TrustSection />
      <PortfolioSection items={portfolio} />
      <ServicesSection />
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">왜 PIXEL인가?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-morphism rounded-2xl">
              <div className="text-red-500 mb-4 flex justify-center"><ShieldCheck size={40} /></div>
              <h3 className="text-xl font-bold mb-2">운영 책임제</h3>
              <p className="text-sm text-gray-400">단순 설치가 아니라 행사 종료 시점까지 완벽한 운영을 책임집니다.</p>
            </div>
            <div className="p-8 glass-morphism rounded-2xl">
              <div className="text-red-500 mb-4 flex justify-center"><Zap size={40} /></div>
              <h3 className="text-xl font-bold mb-2">현장 변수 대응</h3>
              <p className="text-sm text-gray-400">수많은 대형 프로젝트 경험으로 어떤 돌발 상황도 즉시 해결합니다.</p>
            </div>
            <div className="p-8 glass-morphism rounded-2xl">
              <div className="text-red-500 mb-4 flex justify-center"><Settings size={40} /></div>
              <h3 className="text-xl font-bold mb-2">시스템 최적화</h3>
              <p className="text-sm text-gray-400">장비의 성능을 100% 끌어내는 최적의 시스템 설계를 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default function App() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('pixel_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  useEffect(() => {
    localStorage.setItem('pixel_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  return (
    <Router>
      <div className="min-h-screen bg-black selection:bg-red-500 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage portfolio={portfolio} />} />
          <Route path="/admin" element={<AdminPanel portfolio={portfolio} setPortfolio={setPortfolio} />} />
        </Routes>
        
        <footer className="py-12 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-bold tracking-tighter">PIXEL</div>
            <div className="text-sm text-gray-500">© 2024 PIXEL LED & VIDEO. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="mailto:skawogud45@naver.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </footer>

        {/* Quick Contact Floats */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          <a href="tel:01088295270" className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <Phone size={24} />
          </a>
          <a href="mailto:skawogud45@naver.com" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </Router>
  );
}
