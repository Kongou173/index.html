function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const socialLinks = {
    github: "https://github.com/実際のGitHubユーザー名",
    discord: "https://discord.com/users/実際のDiscordID",
    linkedin: "https://linkedin.com/in/実際のLinkedInユーザー名",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("ja-JP", options)
      .format(date)
      .replace(/\//g, "-")
      .replace(/,/g, "");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white font-inter">
        <div className="fixed top-0 right-0 p-4 text-[#64ffda] text-lg z-50">
          {formatTime(currentTime)}
        </div>
        <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Your Name</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-[#64ffda] transition-colors"
              >
                ホーム
              </a>
              <a
                href="#about"
                className="hover:text-[#64ffda] transition-colors"
              >
                自己紹介
              </a>
              <a
                href="#skills"
                className="hover:text-[#64ffda] transition-colors"
              >
                スキル
              </a>
              <a
                href="#contact"
                className="hover:text-[#64ffda] transition-colors"
              >
                連絡先
              </a>
            </div>
            <button
              className="md:hidden text-2xl"
              onClick={() => setShowMenu(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute w-full bg-[#0a0a0a] border-t border-[#1a1a1a]">
              <div className="flex flex-col items-center py-4 space-y-4">
                <a
                  href="#home"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  ホーム
                </a>
                <a
                  href="#about"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  自己紹介
                </a>
                <a
                  href="#skills"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  スキル
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  連絡先
                </a>
              </div>
            </div>
          )}
        </nav>

        {showMenu && (
          <div className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center">
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-6 right-6 text-2xl hover:text-[#64ffda]"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="text-center space-y-8">
              <a
                href="#home"
                onClick={() => setShowMenu(false)}
                className="block text-4xl hover:text-[#64ffda] transition-colors"
              >
                ホーム
              </a>
              <a
                href="#about"
                onClick={() => setShowMenu(false)}
                className="block text-4xl hover:text-[#64ffda] transition-colors"
              >
                自己紹介
              </a>
              <a
                href="#skills"
                onClick={() => setShowMenu(false)}
                className="block text-4xl hover:text-[#64ffda] transition-colors"
              >
                スキル
              </a>
              <a
                href="#contact"
                onClick={() => setShowMenu(false)}
                className="block text-4xl hover:text-[#64ffda] transition-colors"
              >
                連絡先
              </a>
            </div>
          </div>
        )}

        <section
          id="home"
          className="h-screen flex items-center justify-center px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-[#64ffda]">ようこそ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
              このページは現在作成中です。近日公開予定です。
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#contact"
                className="px-8 py-3 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-bold hover:bg-[#4fd1b3] transition-colors"
              >
                お問い合わせ
              </a>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-bold hover:bg-[#64ffda] hover:text-[#0a0a0a] transition-colors"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </section>

        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-[#64ffda]">こんにちは</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">あなたの肩書き</p>
          </div>
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">自己紹介</h2>
            <p className="text-gray-400 leading-relaxed">
              あなたの自己紹介文をここに書いてください。
            </p>
          </div>
        </section>
        <section
          id="skills"
          className="min-h-screen bg-[#0f0f0f] flex items-center py-20 px-4"
        >
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">スキル</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-transform">
                <i className="fab fa-html5 text-4xl text-[#64ffda] mb-4"></i>
                <h3>HTML/CSS</h3>
              </div>
              <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-transform">
                <i className="fab fa-js text-4xl text-[#64ffda] mb-4"></i>
                <h3>JavaScript</h3>
              </div>
              <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-transform">
                <i className="fab fa-react text-4xl text-[#64ffda] mb-4"></i>
                <h3>React</h3>
              </div>
              <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-transform">
                <i className="fab fa-python text-4xl text-[#64ffda] mb-4"></i>
                <h3>Python</h3>
              </div>
              <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-transform">
                <i className="fab fa-discord text-4xl text-[#64ffda] mb-4"></i>
                <h3>discord.py</h3>
              </div>
              <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-transform">
                <i className="fab fa-discord text-4xl text-[#64ffda] mb-4"></i>
                <h3>discord.js</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-[#0a0a0a] flex items-center py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Discord Bot</h2>
            <p className="text-gray-400 mb-8">
              私が作成したDiscord Botをチェックしてください！
            </p>
            <a
              href="あなたのDiscord Botの実際のURL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-bold hover:bg-[#4fd1b3] transition-colors"
            >
              <i className="fab fa-discord mr-2"></i>
              Botを追加する
            </a>
          </div>
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">連絡先</h2>
            <div className="flex justify-center space-x-8 text-3xl">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors transform hover:scale-110"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors transform hover:scale-110"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors transform hover:scale-110"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: #0a0a0a;
          color: white;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .min-h-screen {
          min-height: 100vh;
        }

        .hover\\:text-\\[\\#64ffda\\]:hover {
          color: #64ffda;
        }

        .transition-colors {
          transition: color 0.3s ease;
        }

        .hover\\:transform:hover {
          transform: scale(1.05);
        }

        .transition-transform {
          transition: transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .md\\:hidden {
            display: none;
          }
          
          .md\\:flex {
            display: flex;
          }
          
          .md\\:text-7xl {
            font-size: 4.5rem;
          }
          
          .md\\:text-2xl {
            font-size: 1.5rem;
          }
          
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}


