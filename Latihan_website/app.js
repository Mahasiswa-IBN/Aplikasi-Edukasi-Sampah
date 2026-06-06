/**
 * EcoEdu - UPT SMP Negeri 4 Gadingrejo
 * Core Application JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// ==========================================
// APPLICATION STATE
// ==========================================
const AppState = {
    theme: 'light',
    activeTab: 'beranda',
    
    // Materials Data
    materials: [
        {
            id: 'materi-3r',
            title: 'Prinsip 3R: Reduce, Reuse, Recycle',
            shortDesc: 'Tiga pilar utama dalam mengelola sampah secara bijak demi kelestarian alam.',
            category: 'Konsep Dasar',
            readTime: '8 Menit Baca',
            iconClass: 'fa-solid fa-arrows-spin',
            gradientClass: 'card-img-grad-1',
            contentHtml: `
                <h2>Prinsip 3R (Reduce, Reuse, Recycle)</h2>
                <p>Prinsip 3R adalah langkah paling efektif bagi kita semua, khususnya siswa UPT SMP Negeri 4 Gadingrejo, untuk ikut serta mengurangi penumpukan sampah di bumi. Setiap hari, sekolah kita menghasilkan ratusan kilogram sampah dari kantin, kelas, dan kegiatan ekstrakurikuler. Tanpa pengelolaan yang benar, sampah tersebut akan menumpuk dan mencemari lingkungan.</p>
                <p>Ketiga prinsip ini harus dilakukan secara berurutan: <strong>Reduce dulu, baru Reuse, lalu Recycle</strong>. Banyak orang langsung fokus pada daur ulang, padahal cara terbaik adalah mengurangi sampah sejak awal agar tidak perlu diolah sama sekali.</p>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-lightbulb"></i> Ingat!</strong> Mengurangi 1 botol plastik yang dibeli lebih baik daripada mendaur ulang 10 botol plastik bekas. Semakin sedikit sampah yang kita hasilkan, semakin sedikit masalah yang harus ditangani.
                </div>

                <h3>Jelajahi Ketiga Prinsip 3R</h3>
                <p>Gunakan tab di bawah untuk mempelajari masing-masing prinsip beserta contoh nyata yang bisa kamu lakukan di sekolah maupun di rumah.</p>
                
                <div class="interactive-3r-container">
                    <!-- Tab Buttons -->
                    <div class="tabs-3r">
                        <button class="tab-3r-btn active" data-3r="reduce">
                            <i class="fa-solid fa-circle-down"></i> REDUCE
                        </button>
                        <button class="tab-3r-btn" data-3r="reuse">
                            <i class="fa-solid fa-arrows-spin"></i> REUSE
                        </button>
                        <button class="tab-3r-btn" data-3r="recycle">
                            <i class="fa-solid fa-recycle"></i> RECYCLE
                        </button>
                    </div>

                    <!-- Panel Content -->
                    <div class="panels-3r-container">
                        <!-- Panel 1: REDUCE -->
                        <div class="panel-3r active" id="panel-reduce">
                            <div class="panel-3r-header text-green">
                                <i class="fa-solid fa-circle-down main-3r-icon bounce-animation text-green"></i>
                                <div>
                                    <h3>Reduce (Mengurangi)</h3>
                                    <span class="tagline">Langkah Pertama & Paling Utama!</span>
                                </div>
                            </div>
                            <p>Reduce berarti meminimalkan timbulan sampah sejak awal. Ini adalah langkah terbaik karena jika kita tidak memproduksi sampah, maka tidak ada sampah yang perlu diolah atau mencemari lingkungan. Reduce mencakup kebiasaan memilih produk dengan kemasan lebih sedikit, menolak barang sekali pakai, dan menggunakan sumber daya secara hemat.</p>
                            <p>Di lingkungan sekolah, Reduce bisa diterapkan saat jajan di kantin (bawa bekal sendiri), saat praktikum (hemat kertas), dan saat acara sekolah (kurangi kemasan plastik untuk souvenir).</p>
                            
                            <div class="interactive-cards-grid">
                                <!-- Card 1 -->
                                <div class="flip-card-3r" data-type="reduce">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-bottle-water text-green"></i>
                                            <span>Bawa Tumbler</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Bawa Botol Minum</strong>
                                            <p>Membawa tumbler & kotak bekal sendiri mengurangi puluhan botol plastik sekali pakai di kantin setiap harinya!</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card 2 -->
                                <div class="flip-card-3r" data-type="reduce">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-ban text-green"></i>
                                            <span>Tolak Plastik</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Tanpa Sedotan & Kresek</strong>
                                            <p>Katakan tidak pada sedotan plastik. Gunakan kantong tas belanja kain (tote bag) saat jajan di sekitar sekolah.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card 3 -->
                                <div class="flip-card-3r" data-type="reduce">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-scroll text-green"></i>
                                            <span>Hemat Kertas</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Gunakan Kertas Dua Sisi</strong>
                                            <p>Manfaatkan lembar kertas bekas secara bolak-balik untuk menghitung coret-coretan rumus tugas matematika.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="flip-card-help"><i class="fa-solid fa-hand-pointer"></i> Ketuk atau arahkan kursor pada kartu contoh di atas untuk membaliknya!</span>
                        </div>

                        <!-- Panel 2: REUSE -->
                        <div class="panel-3r" id="panel-reuse">
                            <div class="panel-3r-header text-yellow">
                                <i class="fa-solid fa-arrows-spin main-3r-icon rotate-animation text-yellow"></i>
                                <div>
                                    <h3>Reuse (Menggunakan Kembali)</h3>
                                    <span class="tagline">Ubah Barang Bekas Menjadi Berguna!</span>
                                </div>
                            </div>
                            <p>Reuse adalah menggunakan kembali benda-benda bekas yang masih layak pakai tanpa melalui proses peleburan/pengolahan fisik pabrik yang memakan energi. Ini memperpanjang umur barang dan menghemat biaya. Berbeda dengan daur ulang, barang tidak dihancurkan — hanya dipakai ulang dengan fungsi yang sama atau fungsi baru.</p>
                            <p>Reuse sangat cocok untuk kegiatan prakarya di sekolah: kerajinan dari botol bekas, dinding tanaman vertikal, atau pojok baca dari kardus. Kreativitasmu adalah batasnya!</p>
                            
                            <div class="interactive-cards-grid">
                                <!-- Card 1 -->
                                <div class="flip-card-3r" data-type="reuse">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-seedling text-yellow"></i>
                                            <span>Pot Tanaman Botol</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Pot Tanaman Kreatif</strong>
                                            <p>Botol plastik bekas air minum dipotong, dihias cantik, lalu diisi tanah untuk pot tanaman gantung di koridor kelas.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card 2 -->
                                <div class="flip-card-3r" data-type="reuse">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-pen-fancy text-yellow"></i>
                                            <span>Tempat Pensil Kaleng</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Wadah Alat Tulis Kaleng</strong>
                                            <p>Kaleng minuman soda dibersihkan dan dicat warna-warni untuk dijadikan wadah pensil di meja belajarmu.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card 3 -->
                                <div class="flip-card-3r" data-type="reuse">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-book-open text-yellow"></i>
                                            <span>Hibah Buku Bekas</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Sumbang ke Perpustakaan</strong>
                                            <p>Menyumbangkan komik, kamus, atau novel bekas yang sudah dibaca ke pojok baca kelas atau perpus sekolah.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="flip-card-help"><i class="fa-solid fa-hand-pointer"></i> Ketuk atau arahkan kursor pada kartu contoh di atas untuk membaliknya!</span>
                        </div>

                        <!-- Panel 3: RECYCLE -->
                        <div class="panel-3r" id="panel-recycle">
                            <div class="panel-3r-header text-blue">
                                <i class="fa-solid fa-recycle main-3r-icon pulse-animation text-blue"></i>
                                <div>
                                    <h3>Recycle (Mendaur Ulang)</h3>
                                    <span class="tagline">Diolah Kembali untuk Nilai Baru!</span>
                                </div>
                            </div>
                            <p>Recycle adalah mengolah kembali sampah yang tidak bisa langsung dipakai melalui proses kimia/fisika (peleburan, penghancuran) untuk memproduksi bahan mentah baru yang berguna kembali. Proses ini membutuhkan energi dan fasilitas khusus, sehingga menjadi pilihan terakhir setelah Reduce dan Reuse.</p>
                            <p>Di sekolah, Recycle dilakukan lewat Bank Sampah, pembuatan kompos dari organik, dan kegiatan daur ulang kertas untuk prakarya. Pastikan sampah sudah bersih dan terpilah sebelum disetor agar layak didaur ulang.</p>
                            
                            <div class="interactive-cards-grid">
                                <!-- Card 1 -->
                                <div class="flip-card-3r" data-type="recycle">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-bucket text-blue"></i>
                                            <span>Pupuk Kompos Daun</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Kompos Organik Sekolah</strong>
                                            <p>Mengumpulkan dedaunan rontok di halaman sekolah lalu didekomposisi agar kembali menjadi pupuk penyubur kebun.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card 2 -->
                                <div class="flip-card-3r" data-type="recycle">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-shirt text-blue"></i>
                                            <span>Keset Kain Perca</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Daur Ulang Serat Kain</strong>
                                            <p>Memanfaatkan sisa-sisa kain sisa jahitan (perca) untuk dianyam menjadi keset pintu kelas yang tebal dan bersih.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card 3 -->
                                <div class="flip-card-3r" data-type="recycle">
                                    <div class="flip-card-inner-3r">
                                        <div class="flip-card-front-3r">
                                            <i class="fa-solid fa-square-envelope text-blue"></i>
                                            <span>Pulp Kertas Hias</span>
                                        </div>
                                        <div class="flip-card-back-3r">
                                            <strong>Kertas Daur Ulang Seni</strong>
                                            <p>Kertas ujian lama yang dirajang, dijadikan bubur kertas, lalu dicetak kembali sebagai media gambar prakarya seni.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="flip-card-help"><i class="fa-solid fa-hand-pointer"></i> Ketuk atau arahkan kursor pada kartu contoh di atas untuk membaliknya!</span>
                        </div>
                    </div>
                </div>

                <h3>Perbandingan Singkat Ketiga Prinsip</h3>
                <ul>
                    <li><strong>Reduce</strong> — Mencegah sampah terbentuk sejak awal (paling efektif).</li>
                    <li><strong>Reuse</strong> — Memakai ulang barang bekas tanpa mengubah bentuknya di pabrik.</li>
                    <li><strong>Recycle</strong> — Mengolah sampah menjadi bahan atau produk baru lewat proses industri.</li>
                </ul>

                <h3>Tantangan untuk Siswa SMPN 4 Gadingrejo</h3>
                <p>Cobalah menerapkan minimal satu kebiasaan 3R setiap minggu: bawa tumbler Senin–Jumat, kumpulkan kertas bekas untuk Bank Sampah, atau buat kerajinan dari botol plastik saat jam prakarya. Catat perubahan yang kamu rasakan — berapa sampah yang berkurang di kelasmu?</p>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Prinsip 3R bukan sekadar teori di buku pelajaran, melainkan gaya hidup. Mulai dari hal kecil di kelas dan kantin, lalu ajak teman sebangkumu untuk ikut berpartisipasi!
                </div>
            `
        },
        {
            id: 'materi-dampak',
            title: 'Dampak Sampah bagi Lingkungan',
            shortDesc: 'Bagaimana sampah yang tidak terkelola merusak ekosistem dan mengancam kesehatan.',
            category: 'Dampak Lingkungan',
            readTime: '7 Menit Baca',
            iconClass: 'fa-solid fa-triangle-exclamation',
            gradientClass: 'card-img-grad-2',
            contentHtml: `
                <h2>Dampak Sampah bagi Lingkungan</h2>
                <p>Membuang sampah sembarangan tidak hanya merusak pemandangan sekolah kita, tetapi juga menimbulkan ancaman serius bagi alam dan kesehatan manusia. Setiap tahun, jutaan ton sampah di Indonesia berakhir di tempat pembuangan akhir (TPA), sungai, dan laut — banyak di antaranya berasal dari kebiasaan membuang yang tidak benar di lingkungan sehari-hari.</p>
                <p>Bagi siswa SMP, memahami dampak sampah sangat penting karena kita adalah generasi yang akan hidup di bumi ini untuk puluhan tahun ke depan. Lingkungan yang rusak hari ini akan menjadi tanggung jawab kita besok.</p>

                <div class="highlight-box warning">
                    <strong><i class="fa-solid fa-triangle-exclamation"></i> Fakta Menarik:</strong> Indonesia termasuk salah satu penyumbang sampah plastik ke laut terbesar di dunia. Perubahan kecil di sekolah — seperti memilah sampah dengan benar — bisa memberi dampak besar jika dilakukan oleh seluruh siswa secara konsisten.
                </div>

                <h3>Empat Dampak Utama Sampah</h3>
                <p>Ketuk setiap kartu di bawah untuk membaca penjelasan lengkap beserta contoh yang sering kita jumpai di sekitar sekolah dan permukiman Gadingrejo.</p>
                
                <div class="interactive-dampak-container">
                    <p class="instruction-text"><i class="fa-solid fa-hand-pointer"></i> Ketuk salah satu kartu dampak di bawah ini untuk melihat detail penjelasannya!</p>
                    <div class="dampak-grid">
                        <div class="dampak-card" data-dampak="pencemaran">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-droplet-slash dampak-icon pulse-animation text-red"></i>
                                <h4>Pencemaran Lingkungan</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Sampah plastik yang tertimbun butuh waktu ratusan tahun untuk hancur. Zat kimia racun plastik (seperti BPA dan ftalat) meresap ke tanah dan mencemari air tanah yang kita gunakan mandi dan minum sehari-hari.</p>
                                <ul>
                                    <li>Air sumur di sekitar TPA bisa tercemar logam berat</li>
                                    <li>Tanah kehilangan kesuburan karena tertutup plastik</li>
                                    <li>Sampah B3 yang bercampur memperparah pencemaran</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-dampak="banjir">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-cloud-showers-water dampak-icon shake-animation text-yellow"></i>
                                <h4>Menyebabkan Banjir</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Di musim hujan, sampah menyumbat selokan sekolah atau sungai di Gadingrejo. Akibatnya air meluap, memicu banjir, dan merusak fasilitas belajar kita seperti ruang kelas, perpustakaan, dan halaman olahraga.</p>
                                <ul>
                                    <li>Botol plastik dan kantong kresek paling sering menyumbat saluran air</li>
                                    <li>Banjir mengganggu kegiatan belajar dan berbahaya bagi keselamatan</li>
                                    <li>Biaya perbaikan fasilitas sekolah menjadi lebih besar</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-dampak="penyakit">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-biohazard dampak-icon wobbly text-red"></i>
                                <h4>Sumber Penyakit</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Tumpukan sampah basah membusuk menjadi sarang lalat, tikus, dan kucing liar pembawa kuman. Genangan air di botol/kaleng plastik bekas menjadi sarang utama jentik nyamuk Demam Berdarah (DBD) dan malaria.</p>
                                <ul>
                                    <li>Bau busuk mengganggu kenyamanan belajar di kelas</li>
                                    <li>Sampah organik basah memicu pertumbuhan bakteri berbahaya</li>
                                    <li>Anak-anak lebih rentan terhadap penyakit dari lingkungan kotor</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-dampak="global">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-temperature-arrow-up dampak-icon float-animation text-green"></i>
                                <h4>Pemanasan Global</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Sampah organik basah yang menimbun di TPA membusuk tanpa oksigen (anaerob) dan menghasilkan gas metana — salah satu gas rumah kaca yang memanaskan suhu bumi. Sampah plastik yang dibakar juga melepaskan karbon dioksida dan dioxin beracun.</p>
                                <ul>
                                    <li>Suhu bumi naik → cuaca ekstrem dan musim hujan tidak menentu</li>
                                    <li>Pemanasan global mengancam ekosistem laut dan darat</li>
                                    <li>Mengurangi sampah = ikut menurunkan emisi gas rumah kaca</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Dampak di Lingkungan Sekolah</h3>
                <p>Bayangkan jika setiap siswa membuang satu bungkus snack sembarangan setiap hari — dalam sebulan akan ada ribuan sampah berserakan di halaman sekolah. Kantin yang tidak bersih, koridor yang bau, dan halaman yang penuh plastik membuat suasana belajar tidak nyaman dan mempermalukan citra sekolah kita.</p>

                <h3>Apa yang Bisa Kita Lakukan?</h3>
                <ol>
                    <li>Buang sampah ke tempat yang benar dan pilah sesuai jenisnya.</li>
                    <li>Ikut kegiatan piket kebersihan kelas dan lingkungan sekolah.</li>
                    <li>Tegur teman yang masih membuang sampah sembarangan — dengan sopan.</li>
                    <li>Ikut program Bank Sampah dan Adiwiyata di sekolah.</li>
                    <li>Terapkan kebiasaan bersih yang sama di rumah dan lingkungan sekitar.</li>
                </ol>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Sampah bukan hanya masalah pemerintah — ini tanggung jawab kita semua. Dengan mengelola sampah dengan benar, kita melindungi lingkungan, kesehatan, dan masa depan bumi.
                </div>
            `
        },
        {
            id: 'materi-banksampah',
            title: 'Mengenal Bank Sampah Sekolah',
            shortDesc: 'Program seru menabung sampah kering untuk menjaga sekolah dan meraih banyak hadiah.',
            category: 'Aktivitas Sekolah',
            readTime: '8 Menit Baca',
            iconClass: 'fa-solid fa-piggy-bank',
            gradientClass: 'card-img-grad-3',
            contentHtml: `
                <h2>Mengenal Bank Sampah Sekolah</h2>
                <p>Pernahkah kamu mendengar tentang Bank Sampah? Seperti bank pada umumnya, di sini kamu juga bisa menabung, tetapi yang ditabung bukanlah uang melainkan sampah kering yang bersih! Bank Sampah adalah wadah pengumpulan sampah anorganik bernilai ekonomi yang dikelola secara terorganisir, biasanya oleh kader Adiwiyata atau OSIS di sekolah.</p>
                <p>Konsep ini mengajarkan bahwa sampah bukan selalu sesuatu yang harus dibuang — jika dikelola dengan benar, sampah bisa bernilai dan memberi manfaat. Siswa yang rajin menabung sampah tidak hanya menjaga kebersihan sekolah, tetapi juga bisa mendapatkan reward berupa alat tulis, buku, atau hadiah lain di akhir semester.</p>

                <h3>Manfaat Bank Sampah di Sekolah</h3>
                <ul>
                    <li>Mengurangi volume sampah yang dibuang ke TPA</li>
                    <li>Melatih siswa disiplin memilah dan membersihkan sampah</li>
                    <li>Menghasilkan poin/tabungan yang bisa ditukar hadiah</li>
                    <li>Mendukung program sekolah Adiwiyata dan lingkungan hidup</li>
                    <li>Menciptakan kebiasaan peduli lingkungan sejak dini</li>
                </ul>

                <h3>Cara Menabung Sampah — 4 Langkah</h3>
                <p>Ikuti tahapan interaktif di bawah ini untuk memahami proses menabung sampah dari awal hingga mendapatkan poin.</p>
                
                <div class="interactive-bank-container">
                    <p class="instruction-text"><i class="fa-solid fa-hand-pointer"></i> Ketuk tahapan angka (1-4) di bawah untuk mempelajari cara menabung sampah!</p>
                    
                    <div class="stepper-bank">
                        <div class="step-bank active" data-step="1">
                            <div class="step-num">1</div>
                            <span>Pilah</span>
                        </div>
                        <div class="step-bank" data-step="2">
                            <div class="step-num">2</div>
                            <span>Bersihkan</span>
                        </div>
                        <div class="step-bank" data-step="3">
                            <div class="step-num">3</div>
                            <span>Setorkan</span>
                        </div>
                        <div class="step-bank" data-step="4">
                            <div class="step-num">4</div>
                            <span>Catat</span>
                        </div>
                    </div>
                    
                    <div class="step-content-display">
                        <div class="step-panel active-panel" id="step-panel-1">
                            <div class="step-panel-header text-green">
                                <i class="fa-solid fa-arrows-split-up-and-left step-panel-icon bounce-animation"></i>
                                <h3>Langkah 1: Pilah Sampah</h3>
                            </div>
                            <p>Pisahkan sampah kering bernilai daur ulang dari sampah basah. Sampah yang bisa ditabung antara lain: botol plastik PET bersih, kaleng aluminium, kardus kering, kertas HVS bekas ujian, dan koran. Jangan campur dengan sisa makanan atau sampah B3!</p>
                        </div>
                        <div class="step-panel" id="step-panel-2">
                            <div class="step-panel-header text-yellow">
                                <i class="fa-solid fa-soap step-panel-icon rotate-animation"></i>
                                <h3>Langkah 2: Bersihkan Sampah</h3>
                            </div>
                            <p>Bilas botol plastik, gelas kemasan, atau kaleng dari sisa cairan agar tidak bau dan tidak mengundang semut, lalat, atau kecoak. Keringkan sebentar sebelum ditumpuk di rumah. Sampah kotor ditolak petugas Bank Sampah karena sulit dijual ke pengepul.</p>
                        </div>
                        <div class="step-panel" id="step-panel-3">
                            <div class="step-panel-header text-blue">
                                <i class="fa-solid fa-person-walking-luggage step-panel-icon pulse-animation"></i>
                                <h3>Langkah 3: Bawa & Setorkan</h3>
                            </div>
                            <p>Kumpulkan sampah bersihmu di kantong terpisah sesuai jenis (plastik, kertas, logam). Bawa ke pos Bank Sampah sekolah pada hari pelayanan yang diumumkan kader Adiwiyata — biasanya sekali seminggu atau dua minggu sekali.</p>
                        </div>
                        <div class="step-panel" id="step-panel-4">
                            <div class="step-panel-header text-green">
                                <i class="fa-solid fa-piggy-bank step-panel-icon bounce-animation text-green"></i>
                                <h3>Langkah 4: Timbang, Catat & Dapat Hadiah!</h3>
                            </div>
                            <p>Petugas menimbang sampahmu per kilogram dan mencatat poin ke buku tabungan sampah. Semakin banyak dan rajin menabung, semakin besar poinmu. Di akhir semester, poin bisa ditukar alat tulis, buku, atau merchandise sekolah!</p>
                        </div>
                    </div>
                </div>

                <h3>Jenis Sampah yang Bisa Ditabung</h3>
                <ul>
                    <li><strong>Plastik:</strong> Botol air mineral, botol minuman, wadah snack (bersih & kering)</li>
                    <li><strong>Kertas:</strong> HVS bekas, kardus, koran, majalah (tidak basah atau berminyak)</li>
                    <li><strong>Logam:</strong> Kaleng minuman aluminium, kaleng biskuit</li>
                    <li><strong>Kaca:</strong> Botol kaca utuh (hindari pecahan tajam)</li>
                </ul>

                <div class="highlight-box warning">
                    <strong><i class="fa-solid fa-ban"></i> Tidak Bisa Ditabung:</strong> Sampah organik basah, popok, tisu bekas, styrofoam kotor, sampah B3, dan plastik yang masih berisi sisa makanan/minuman.
                </div>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Bank Sampah mengubah kebiasaan membuang menjadi kebiasaan menabung. Mulai kumpulkan sampah kering dari kelasmu hari ini — setiap gram yang kamu setorkan membantu planet ini sedikit demi sedikit!
                </div>
            `
        },
        {
            id: 'materi-kompos',
            title: 'Membuat Kompos Organik Sendiri',
            shortDesc: 'Ubah sisa sayur dan dedaunan sekolah menjadi pupuk tanaman subur.',
            category: 'Praktik Mandiri',
            readTime: '8 Menit Baca',
            iconClass: 'fa-solid fa-seedling',
            gradientClass: 'card-img-grad-4',
            contentHtml: `
                <h2>Cara Membuat Kompos Organik Sederhana</h2>
                <p>Sampah organik menyumbang porsi terbesar di tempat sampah sekolah — bisa mencapai 60% dari total sampah harian. Daripada membusuk di TPA dan menghasilkan gas metana, sampah organik bisa diubah menjadi kompos: pupuk alami yang menyuburkan tanaman di kebun sekolah.</p>
                <p>Kompos dibuat oleh mikroorganisme pengurai (bakteri dan jamur) yang memecah bahan organik menjadi humus hitam bernutrisi. Proses ini membutuhkan waktu 4–6 minggu dan bisa dilakukan di sudut halaman sekolah dengan peralatan sederhana.</p>

                <h3>Manfaat Kompos untuk Sekolah</h3>
                <ul>
                    <li>Mengurangi sampah organik yang dibuang ke tempat pembuangan akhir</li>
                    <li>Menghasilkan pupuk gratis untuk tanaman di halaman dan kebun sekolah</li>
                    <li>Melatih siswa praktik IPA dan kewirausahaan lingkungan</li>
                    <li>Menciptakan lingkungan sekolah yang lebih hijau dan asri</li>
                </ul>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-lightbulb"></i> Tips:</strong> Kompos yang baik tidak berbau busuk. Jika bau menyengat, berarti campuran terlalu basah atau kurang bahan kering (daun kering, ranting kecil).
                </div>

                <h3>Panduan Interaktif Pembuatan Kompos</h3>
                <p>Pilih tab "Alat & Bahan" untuk memeriksa kesiapan, lalu beralih ke "Langkah Pembuatan" untuk melihat urutan lengkapnya.</p>
                
                <div class="interactive-kompos-container">
                    <div class="subtab-kompos">
                        <button class="btn-kompos active" data-target="bahan">
                            <i class="fa-solid fa-basket-shopping"></i> Alat & Bahan
                        </button>
                        <button class="btn-kompos" data-target="langkah">
                            <i class="fa-solid fa-list-check"></i> Langkah Pembuatan
                        </button>
                    </div>
                    
                    <div class="kompos-content-display">
                        <!-- Tab 1: Bahan -->
                        <div class="kompos-panel active-panel" id="kompos-panel-bahan">
                            <p class="instruction-text"><i class="fa-solid fa-circle-check"></i> Sentuh/ketuk kotak-kotak bahan di bawah untuk memeriksa kesiapan praktik pembuatannya!</p>
                            <div class="check-list-kompos">
                                <div class="check-item">
                                    <input type="checkbox" id="item-ember">
                                    <label for="item-ember"><i class="fa-solid fa-bucket text-blue"></i> Ember Besar Komposter (Berlubang bawah)</label>
                                </div>
                                <div class="check-item">
                                    <input type="checkbox" id="item-hijau">
                                    <label for="item-hijau"><i class="fa-solid fa-apple-whole text-green"></i> Sampah Hijau Basah (Sisa sayur/buah kantin)</label>
                                </div>
                                <div class="check-item">
                                    <input type="checkbox" id="item-cokelat">
                                    <label for="item-cokelat"><i class="fa-solid fa-leaf text-yellow"></i> Sampah Cokelat Kering (Dedaunan gugur/ranting)</label>
                                </div>
                                <div class="check-item">
                                    <input type="checkbox" id="item-tanah">
                                    <label for="item-tanah"><i class="fa-solid fa-mountain text-brown"></i> Tanah Hitam Kebun Secukupnya</label>
                                </div>
                                <div class="check-item">
                                    <input type="checkbox" id="item-em4">
                                    <label for="item-em4"><i class="fa-solid fa-bottle-droplet text-red"></i> Cairan Bio-aktivator EM4 & Air</label>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tab 2: Langkah -->
                        <div class="kompos-panel" id="kompos-panel-langkah">
                            <p class="instruction-text"><i class="fa-solid fa-circle-info"></i> Pelajari linimasa urutan pembuatan di bawah secara saksama:</p>
                            <div class="timeline-kompos">
                                <div class="timeline-step">
                                    <div class="timeline-num">1</div>
                                    <div class="timeline-text">
                                        <strong>Lapisan Tanah Awal</strong>
                                        <p>Masukkan tanah ke dasar ember setebal 5 cm sebagai sarang awal mikroba pengurai. Tanah mengandung bakteri dan jamur alami yang akan memulai proses penguraian sampah organik.</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-num">2</div>
                                    <div class="timeline-text">
                                        <strong>Cacah Sampah Hijau</strong>
                                        <p>Potong sayuran, buah, dan sisa makanan berukuran 2–3 cm. Semakin kecil potongan, semakin cepat terurai. Hindari tulang besar dan daging berlebih yang memperlambat proses.</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-num">3</div>
                                    <div class="timeline-text">
                                        <strong>Atur Campuran Daun</strong>
                                        <p>Campurkan sampah hijau basah dengan daun kering/ranting (rasio 1:1). Bahan kering menyerap kelembapan berlebih dan mencegah bau busuk akibat proses anaerob.</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-num">4</div>
                                    <div class="timeline-text">
                                        <strong>Lembapkan EM4</strong>
                                        <p>Siramkan campuran EM4 yang sudah diencerkan dengan air (1:100). Kelembapan ideal seperti spons yang diperas — lembap tapi tidak menetes. Terlalu basah = bau, terlalu kering = lambat terurai.</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-num">5</div>
                                    <div class="timeline-text">
                                        <strong>Tutup Rapat & Aduk</strong>
                                        <p>Tutup rapat wadah agar hangat dan lembap. Aduk dan balik isi komposter setiap 3–7 hari agar oksigen masuk. Dalam 4–6 minggu, kompos matang berwarna hitam, berbau tanah, dan siap dipakai!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Bahan yang Boleh dan Tidak Boleh Dimasukkan</h3>
                <ul>
                    <li><strong>Boleh:</strong> Sisa sayur/buah, dedaunan, ranting kecil, kulit telur, ampas teh/kopi, sisa nasi sedikit</li>
                    <li><strong>Tidak boleh:</strong> Daging, ikan, minyak goreng, susu, popok, plastik, kaca, logam, dan obat-obatan</li>
                </ul>

                <h3>Cara Menggunakan Kompos Matang</h3>
                <p>Campurkan kompos matang ke tanah kebun sekolah dengan perbandingan 1:3 (1 bagian kompos, 3 bagian tanah). Siram tanaman secara rutin. Kompos memperbaiki struktur tanah, menahan air, dan memberi nutrisi alami tanpa bahan kimia berbahaya.</p>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Membuat kompos adalah bentuk daur ulang organik paling mudah di sekolah. Dengan satu ember komposter, kita bisa mengurangi sampah sekaligus menghasilkan pupuk untuk tanaman kelas!
                </div>
            `
        },
        {
            id: 'materi-jenis',
            title: 'Jenis Sampah & Pemilahan yang Tepat',
            shortDesc: 'Kenali empat kategori sampah dan tong warna yang harus kamu gunakan di sekolah.',
            category: 'Konsep Dasar',
            readTime: '7 Menit Baca',
            iconClass: 'fa-solid fa-trash-can',
            gradientClass: 'card-img-grad-5',
            contentHtml: `
                <h2>Jenis Sampah & Pemilahan yang Tepat</h2>
                <p>Memilah sampah sejak di kelas adalah kunci pengelolaan sampah yang baik. Di Indonesia, pemilahan sampah umumnya menggunakan sistem warna tempat sampah agar mudah diingat dan diterapkan oleh semua siswa, guru, dan petugas kebersihan sekolah.</p>
                <p>Setiap jenis sampah punya karakteristik, waktu penguraian, dan cara pengolahan yang berbeda. Jika dicampur, sampah yang seharusnya bisa didaur ulang menjadi tidak layak diproses — misalnya kertas yang basah oleh sisa kuah makanan.</p>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-palette"></i> Sistem Warna Tong Sampah:</strong> Hijau = Organik, Kuning = Anorganik, Biru = Kertas, Merah = B3. Hafalkan empat warna ini agar tidak salah buang!
                </div>

                <h3>Kenali Empat Jenis Sampah</h3>
                <p>Ketuk setiap kartu untuk membaca penjelasan lengkap, contoh sampah, dan cara pengolahannya.</p>

                <div class="interactive-dampak-container">
                    <p class="instruction-text"><i class="fa-solid fa-hand-pointer"></i> Ketuk setiap kartu jenis sampah untuk melihat contoh dan cara pengolahannya!</p>
                    <div class="dampak-grid">
                        <div class="dampak-card" data-jenis="organik">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-apple-whole dampak-icon pulse-animation text-green"></i>
                                <h4>Organik (Hijau)</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Sampah organik berasal dari makhluk hidup dan mudah membusuk secara alami. Contoh: sisa makanan kantin, kulit buah, dedaunan, ampas teh, dan tulang kecil.</p>
                                <ul>
                                    <li>Waktu urai: beberapa hari hingga beberapa minggu</li>
                                    <li>Pengolahan: kompos, pupuk kandang, atau pakan ternak</li>
                                    <li>Tips: jangan biarkan menumpuk — segera buang ke tong hijau</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-jenis="anorganik">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-bottle-water dampak-icon shake-animation text-yellow"></i>
                                <h4>Anorganik (Kuning)</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Sampah anorganik berasal dari bahan sintetis atau mineral dan sulit terurai alami. Contoh: botol plastik, kaleng, styrofoam, gelas plastik, dan kemasan saset.</p>
                                <ul>
                                    <li>Waktu urai: puluhan hingga ratusan tahun (plastik)</li>
                                    <li>Pengolahan: daur ulang, Bank Sampah, kerajinan tangan</li>
                                    <li>Tips: bilas bersih sebelum dibuang atau disetor</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-jenis="kertas">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-file-lines dampak-icon float-animation text-blue"></i>
                                <h4>Kertas (Biru)</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Sampah kertas dipisahkan khusus karena nilai daur ulangnya tinggi. Contoh: buku tulis bekas, LKS, kardus, koran, dan kertas ujian.</p>
                                <ul>
                                    <li>Waktu urai: 2–6 bulan (jika tidak dilapisi plastik)</li>
                                    <li>Pengolahan: bubur kertas (pulp) → kertas/kardus baru</li>
                                    <li>Tips: jangan buang kertas yang basah atau berminyak</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-jenis="b3">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-triangle-exclamation dampak-icon wobbly text-red"></i>
                                <h4>B3 (Merah)</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>B3 (Bahan Berbahaya dan Beracun) mengandung zat kimia berbahaya. Contoh: baterai, lampu neon/TL rusak, kaleng semprotan, dan obat kadaluarsa.</p>
                                <ul>
                                    <li>Bahaya: racun meresap ke tanah dan air jika dibuang sembarangan</li>
                                    <li>Pengolahan: dikumpulkan petugas → disalurkan ke pengolah berizin</li>
                                    <li>Tips: jangan pernah mencampur B3 dengan sampah lain!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Kesalahan Umum Saat Memilah Sampah</h3>
                <ol>
                    <li>Membuang sisa makanan ke tong kertas — membuat kertas tidak layak daur ulang</li>
                    <li>Membuang baterai ke tong anorganik — berbahaya dan mencemari tumpukan sampah</li>
                    <li>Tidak membilas botol plastik — menyebabkan bau dan ditolak Bank Sampah</li>
                    <li>Mencampur semua sampah dalam satu tong — membuat proses daur ulang menjadi sulit</li>
                </ol>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Memilah sampah dengan benar adalah langkah pertama yang paling mudah dilakukan setiap hari. Mulai dari kelasmu — sediakan tempat sampah terpisah dan ajak teman sebangkumu untuk konsisten!
                </div>
            `
        },
        {
            id: 'materi-adiwiyata',
            title: 'Gerakan Adiwiyata di Sekolah',
            shortDesc: 'Peran siswa dalam menjadikan UPT SMPN 4 Gadingrejo sekolah peduli lingkungan.',
            category: 'Aktivitas Sekolah',
            readTime: '8 Menit Baca',
            iconClass: 'fa-solid fa-school-flag',
            gradientClass: 'card-img-grad-6',
            contentHtml: `
                <h2>Gerakan Adiwiyata di Sekolah</h2>
                <p>Adiwiyata adalah program penghargaan dari Kementerian Lingkungan Hidup dan Kehutanan bagi sekolah yang berhasil menerapkan pengelolaan lingkungan hidup secara berkelanjutan. Nama "Adiwiyata" berasal dari bahasa Sansekerta: <em>adi</em> (baik/utama) dan <em>wiyata</em> (tempat belajar) — artinya sekolah yang baik dan peduli lingkungan.</p>
                <p>UPT SMP Negeri 4 Gadingrejo berkomitmen menjadi sekolah Adiwiyata. Agar berhasil, dibutuhkan partisipasi aktif seluruh siswa — bukan hanya guru atau kader OSIS. Setiap tindakan kecilmu berkontribusi pada citra sekolah yang bersih, hijau, dan berkelanjutan.</p>

                <h3>Empat Pilar Adiwiyata</h3>
                <ul>
                    <li><strong>Pembiasaan (Culturization):</strong> Membentuk kebiasaan peduli lingkungan sejak di bangku sekolah</li>
                    <li><strong>Keteladanan (Role Model):</strong> Guru dan siswa senior menjadi contoh dalam menjaga lingkungan</li>
                    <li><strong>Keterlibatan (Involvement):</strong> Semua warga sekolah ikut serta dalam kegiatan lingkungan</li>
                    <li><strong>Kemandirian (Autonomy):</strong> Sekolah mampu mengelola lingkungan secara mandiri dan berkelanjutan</li>
                </ul>

                <h3>5 Peran Siswa dalam Adiwiyata</h3>
                <p>Ketuk setiap langkah di bawah untuk mempelajari apa yang bisa kamu lakukan secara konkret.</p>

                <div class="interactive-bank-container">
                    <p class="instruction-text"><i class="fa-solid fa-hand-pointer"></i> Ketuk langkah 1–5 untuk mempelajari peran siswa dalam gerakan Adiwiyata!</p>

                    <div class="stepper-bank">
                        <div class="step-bank active" data-step="1">
                            <div class="step-num">1</div>
                            <span>Pilah</span>
                        </div>
                        <div class="step-bank" data-step="2">
                            <div class="step-num">2</div>
                            <span>Bersih</span>
                        </div>
                        <div class="step-bank" data-step="3">
                            <div class="step-num">3</div>
                            <span>Hemat</span>
                        </div>
                        <div class="step-bank" data-step="4">
                            <div class="step-num">4</div>
                            <span>Tanam</span>
                        </div>
                        <div class="step-bank" data-step="5">
                            <div class="step-num">5</div>
                            <span>Ajak</span>
                        </div>
                    </div>

                    <div class="step-content-display">
                        <div class="step-panel active-panel" id="step-panel-1">
                            <div class="step-panel-header text-green">
                                <i class="fa-solid fa-arrows-split-up-and-left step-panel-icon bounce-animation"></i>
                                <h3>Langkah 1: Pilah Sampah di Kelas</h3>
                            </div>
                            <p>Sediakan minimal dua tempat sampah di kelas: organik dan anorganik. Tambahkan tong kertas jika memungkinkan. Buat poster pengingat warna tong di dinding kelas agar semua teman ingat. Tegur dengan sopan jika ada yang salah buang.</p>
                        </div>
                        <div class="step-panel" id="step-panel-2">
                            <div class="step-panel-header text-yellow">
                                <i class="fa-solid fa-broom step-panel-icon rotate-animation"></i>
                                <h3>Langkah 2: Jaga Kebersihan Area Sekolah</h3>
                            </div>
                            <p>Ikuti jadwal piket kelas dengan penuh tanggung jawab. Sapu halaman, bersihkan koridor, dan pastikan kantin bebas sampah setelah istirahat. Laporkan ke guru jika ada fasilitas rusak atau tong sampah penuh. Kebersihan sekolah adalah cermin kedisiplinan siswa.</p>
                        </div>
                        <div class="step-panel" id="step-panel-3">
                            <div class="step-panel-header text-blue">
                                <i class="fa-solid fa-faucet step-panel-icon pulse-animation"></i>
                                <h3>Langkah 3: Hemat Sumber Daya</h3>
                            </div>
                            <p>Matikan lampu, kipas, dan AC saat kelas kosong. Tutup keran air setelah digunakan. Gunakan kertas bolak-balik untuk coretan. Hemat listrik dan air = mengurangi beban lingkungan dan biaya operasional sekolah.</p>
                        </div>
                        <div class="step-panel" id="step-panel-4">
                            <div class="step-panel-header text-green">
                                <i class="fa-solid fa-seedling step-panel-icon bounce-animation"></i>
                                <h3>Langkah 4: Rawat Tanaman & Komposter</h3>
                            </div>
                            <p>Ikut kegiatan penanaman dan perawatan tanaman di halaman sekolah. Kumpulkan dedaunan gugur untuk komposter. Tanaman menyerap karbon dioksida, menghasilkan oksigen, dan membuat udara sekitar sekolah lebih segar.</p>
                        </div>
                        <div class="step-panel" id="step-panel-5">
                            <div class="step-panel-header text-green">
                                <i class="fa-solid fa-people-group step-panel-icon bounce-animation"></i>
                                <h3>Langkah 5: Ajak Teman & Keluarga</h3>
                            </div>
                            <p>Jadilah duta lingkungan di kelasmu. Bagikan ilmu pilah sampah ke teman dan keluarga. Buat konten sederhana (poster, video pendek) untuk sosialisasi. Gerakan lingkungan berhasil jika dilakukan bersama-sama, bukan sendirian.</p>
                        </div>
                    </div>
                </div>

                <h3>Kegiatan Adiwiyata yang Bisa Diikuti Siswa</h3>
                <ul>
                    <li>Menjadi kader Bank Sampah atau komite kebersihan kelas</li>
                    <li>Ikut lomba poster, pidato, atau prakarya lingkungan hidup</li>
                    <li>Mengikuti kegiatan penanaman pohon dan penghijauan sekolah</li>
                    <li>Berpartisipasi dalam audit lingkungan sekolah (cek kebersihan, pemilahan sampah)</li>
                </ul>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Adiwiyata bukan sekadar sertifikat di dinding — ia adalah gaya hidup sekolah. Kamu adalah bagian penting dari gerakan ini. Mulai dari kelas, mulai dari hari ini!
                </div>
            `
        },
        {
            id: 'materi-plastik',
            title: 'Bahaya Sampah Plastik Sekali Pakai',
            shortDesc: 'Mengapa botol, sedotan, dan kantong plastik perlu kita kurangi dari kebiasaan sehari-hari.',
            category: 'Dampak Lingkungan',
            readTime: '7 Menit Baca',
            iconClass: 'fa-solid fa-bottle-water',
            gradientClass: 'card-img-grad-7',
            contentHtml: `
                <h2>Bahaya Sampah Plastik Sekali Pakai</h2>
                <p>Plastik memang praktis dan murah, sehingga hampir semua produk kemasan menggunakan plastik — dari botol minuman, sedotan, kantong kresek, hingga bungkus snack di kantin sekolah. Namun, kemudahan ini datang dengan harga yang mahal bagi lingkungan.</p>
                <p>Plastik sekali pakai (single-use plastic) dirancang untuk digunakan sekali lalu dibuang. Masalahnya, plastik tidak mudah hancur di alam dan sering kali berakhir di sungai, laut, atau menumpuk di tempat pembuangan akhir selama ratusan tahun.</p>

                <div class="highlight-box warning">
                    <strong><i class="fa-solid fa-chart-simple"></i> Data Penting:</strong> Setiap tahun, lebih dari 8 juta ton plastik masuk ke lautan dunia. Jika tidak diubah, pada tahun 2050 plastik di laut bisa lebih banyak daripada ikan!
                </div>

                <h3>Fakta & Dampak Plastik</h3>
                <p>Ketuk kartu di bawah untuk mempelajari mengapa plastik sekali pakai begitu berbahaya dan apa solusinya bagi kita sebagai siswa.</p>

                <div class="interactive-dampak-container">
                    <p class="instruction-text"><i class="fa-solid fa-hand-pointer"></i> Ketuk kartu di bawah untuk mempelajari fakta penting tentang sampah plastik!</p>
                    <div class="dampak-grid">
                        <div class="dampak-card" data-plastik="lama">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-hourglass-half dampak-icon pulse-animation text-red"></i>
                                <h4>Lama Terurai</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Satu botol plastik PET membutuhkan 450 tahun atau lebih untuk hancur sepenuhnya. Plastik tidak benar-benar "hilang" — ia hanya terpecah menjadi potongan kecil (mikroplastik) yang tetap ada di lingkungan.</p>
                                <ul>
                                    <li>Sedotan plastik: 200 tahun</li>
                                    <li>Kantong kresek: 10–20 tahun (tapi sering terpecah jadi mikroplastik)</li>
                                    <li>Styrofoam: 500 tahun atau lebih</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-plastik="laut">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-water dampak-icon float-animation text-blue"></i>
                                <h4>Mencemari Air</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Plastik yang dibuang sembarangan di Gadingrejo terbawa air hujan ke selokan, sungai, hingga laut. Di laut, plastik membentuk "pulau sampah" dan terpecah menjadi mikroplastik yang dimakan ikan — lalu ikut masuk ke tubuh manusia saat kita makan seafood.</p>
                                <ul>
                                    <li>1 dari 3 ikan tangkapan di beberapa wilayah mengandung mikroplastik</li>
                                    <li>Plastik mencemari pantai dan ekosistem pesisir</li>
                                    <li>Banjir lokal sering dipicu sampah plastik penyumbat saluran air</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-plastik="hewan">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-paw dampak-icon wobbly text-yellow"></i>
                                <h4>Membahayakan Hewan</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Burung laut, penyu, dan ikan sering salah mengira plastik sebagai makanan. Penyu mengira kantong plastik sebagai ubur-ubur. Sedotan plastik bisa menusuk hidung atau tersangkut di tubuh hewan. Banyak hewan mati karena perutnya penuh plastik yang tidak bisa dicerna.</p>
                                <ul>
                                    <li>Setiap tahun, jutaan hewan laut mati akibat plastik</li>
                                    <li>Kucing dan burung di sekitar sekolah juga bisa terancam</li>
                                    <li>Membuang plastik sembarangan = membahayakan ekosistem</li>
                                </ul>
                            </div>
                        </div>

                        <div class="dampak-card" data-plastik="solusi">
                            <div class="dampak-card-front">
                                <i class="fa-solid fa-hand-holding-heart dampak-icon shake-animation text-green"></i>
                                <h4>Solusi untuk Siswa</h4>
                            </div>
                            <div class="dampak-card-reveal">
                                <p>Sebagai siswa, kamu bisa menjadi agen perubahan! Mulai dari kebiasaan harian yang sederhana namun berdampak besar jika dilakukan bersama-sama seluruh warga sekolah.</p>
                                <ul>
                                    <li>Bawa tumbler — hindari beli air kemasan setiap hari</li>
                                    <li>Tolak sedotan plastik saat jajan di kantin atau warung</li>
                                    <li>Bawa bekal dengan wadah yang bisa dipakai ulang</li>
                                    <li>Setor botol plastik bersih ke Bank Sampah sekolah</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Plastik Sekali Pakai yang Paling Sering Ditemui di Sekolah</h3>
                <ul>
                    <li>Botol air mineral 600 ml — bawa tumbler sebagai gantinya</li>
                    <li>Sedotan plastik untuk minuman — minum langsung dari gelas/tutup botol</li>
                    <li>Kantong kresek dari warung — bawa tas kain kecil di tas sekolah</li>
                    <li>Bungkus snack & permen — pilih yang kemasannya lebih sedikit</li>
                    <li>Gelas plastik sekali pakai saat acara sekolah — gunakan gelas yang bisa dicuci</li>
                </ul>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Mengurangi plastik sekali pakai adalah bentuk Reduce yang paling mudah dilakukan siswa. Kamu tidak perlu menunggu dewasa — mulai dari botol minum dan bekalmu sendiri hari ini!
                </div>
            `
        },
        {
            id: 'materi-etika',
            title: 'Etika Membuang Sampah yang Benar',
            shortDesc: 'Kebiasaan baik membuang sampah di sekolah, kantin, dan lingkungan sekitar rumah.',
            category: 'Praktik Sehari-hari',
            readTime: '7 Menit Baca',
            iconClass: 'fa-solid fa-hand-sparkles',
            gradientClass: 'card-img-grad-8',
            contentHtml: `
                <h2>Etika Membuang Sampah yang Benar</h2>
                <p>Membuang sampah bukan sekadar melempar bungkus snack ke tempat sampah — ada etika dan tata cara yang harus diikuti agar tidak mengganggu orang lain, merusak lingkungan, dan menciptakan kebiasaan buruk. Siswa yang beretika dalam membuang sampah mencerminkan kedisiplinan dan kepedulian terhadap lingkungan sekolah.</p>
                <p>Di UPT SMPN 4 Gadingrejo, kita ingin menciptakan budaya sekolah yang bersih. Itu dimulai dari setiap individu yang membuang sampah dengan benar — di kelas, kantin, halaman, maupun saat pulang sekolah di lingkungan sekitar.</p>

                <h3>Prinsip Dasar Etika Membuang Sampah</h3>
                <ul>
                    <li>Buang sampah pada tempatnya — jangan asal buang</li>
                    <li>Pilah sesuai jenis sebelum membuang</li>
                    <li>Jaga kebersihan area sekitar tong sampah</li>
                    <li>Laporkan jika tong penuh atau rusak</li>
                    <li>Tegur dengan sopan jika melihat teman membuang sembarangan</li>
                </ul>

                <h3>Langkah-Langkah Membuang Sampah dengan Benar</h3>
                <p>Ketuk setiap langkah di bawah untuk mempelajari detailnya.</p>

                <div class="interactive-bank-container">
                    <p class="instruction-text"><i class="fa-solid fa-hand-pointer"></i> Ketuk setiap langkah untuk mempelajari etika membuang sampah yang benar!</p>

                    <div class="stepper-bank">
                        <div class="step-bank active" data-step="1">
                            <div class="step-num">1</div>
                            <span>Cari Tong</span>
                        </div>
                        <div class="step-bank" data-step="2">
                            <div class="step-num">2</div>
                            <span>Pilah</span>
                        </div>
                        <div class="step-bank" data-step="3">
                            <div class="step-num">3</div>
                            <span>Masukkan</span>
                        </div>
                        <div class="step-bank" data-step="4">
                            <div class="step-num">4</div>
                            <span>Tidak Buang</span>
                        </div>
                    </div>

                    <div class="step-content-display">
                        <div class="step-panel active-panel" id="step-panel-1">
                            <div class="step-panel-header text-green">
                                <i class="fa-solid fa-trash-can step-panel-icon bounce-animation"></i>
                                <h3>Langkah 1: Cari Tempat Sampah Terdekat</h3>
                            </div>
                            <p>Jangan membuang sampah ke lantai kelas, selokan, halaman, atau semak-semak. Selalu cari tong sampah terdekat. Jika sedang di luar sekolah, simpan sampah di kantong kecil di tas sampai menemukan tempat sampah umum. Membuang sembarangan adalah perbuatan tidak bertanggung jawab.</p>
                        </div>
                        <div class="step-panel" id="step-panel-2">
                            <div class="step-panel-header text-yellow">
                                <i class="fa-solid fa-recycle step-panel-icon rotate-animation"></i>
                                <h3>Langkah 2: Pisahkan Jenis Sampah</h3>
                            </div>
                            <p>Periksa jenis sampah sebelum dibuang. Sisa makanan → tong hijau (organik). Plastik & kaleng → tong kuning (anorganik). Kertas → tong biru. Baterai & lampu rusak → tong merah (B3). Memilah dengan benar membantu petugas kebersihan dan proses daur ulang.</p>
                        </div>
                        <div class="step-panel" id="step-panel-3">
                            <div class="step-panel-header text-blue">
                                <i class="fa-solid fa-arrow-down step-panel-icon pulse-animation"></i>
                                <h3>Langkah 3: Masukkan dengan Benar</h3>
                            </div>
                            <p>Masukkan sampah ke dalam tong — jangan di sekelilingnya. Tutup rapat penutup tong jika ada. Jika tong penuh, jangan menumpuk sampah di atasnya; laporkan ke petugas kebersihan, guru piket, atau ketua kelas agar segera dikosongkan.</p>
                        </div>
                        <div class="step-panel" id="step-panel-4">
                            <div class="step-panel-header text-red">
                                <i class="fa-solid fa-ban step-panel-icon wobbly"></i>
                                <h3>Langkah 4: Hindari Perilaku Buruk</h3>
                            </div>
                            <p>Jangan bakar sampah (menghasilkan dioxin dan asap beracun), buang ke sungai/selokan, atau tinggalkan sampah di meja kantin setelah makan. Jangan lempar sampah dari kejauhan — masukkan dengan benar. Ajak teman yang masih membuang sembarangan untuk berubah dengan cara yang sopan.</p>
                        </div>
                    </div>
                </div>

                <h3>Perilaku yang Harus Dihindari</h3>
                <div class="highlight-box warning">
                    <ul>
                        <li>Membuang sampah dari jendela kelas atau kendaraan</li>
                        <li>Meninggalkan sampah di lapangan setelah olahraga atau upacara</li>
                        <li>Membuang popok, pampers, atau tisu ke saluran air</li>
                        <li>Mencampur sampah B3 dengan sampah biasa</li>
                        <li>Membakar sampah plastik di halaman rumah atau sekolah</li>
                    </ul>
                </div>

                <h3>Perilaku Baik yang Perlu Diterapkan</h3>
                <ul>
                    <li>Selalu siapkan kantong sampah kecil di tas untuk sampah saat berjalan</li>
                    <li>Bersihkan area makan di kantin setelah selesai makan</li>
                    <li>Ikut piket kebersihan kelas dan lingkungan sekolah</li>
                    <li>Ajukan diri menjadi pengawas kebersihan kelas mingguan</li>
                    <li>Terapkan etika yang sama di rumah dan lingkungan perumahan</li>
                </ul>

                <div class="highlight-box">
                    <strong><i class="fa-solid fa-star"></i> Kesimpulan:</strong> Etika membuang sampah mencerminkan karakter seseorang. Siswa yang peduli lingkungan tidak hanya pintar di kelas, tetapi juga bertanggung jawab terhadap kebersihan sekitarnya. Jadilah teladan di SMPN 4 Gadingrejo!
                </div>
            `
        }
    ],

    // Game Sorting Trash Data
    game: {
        score: 0,
        correctCount: 0,
        totalItems: 0,
        selectedTrashId: null, // For mobile click-fallback selection
        itemsPool: [
            { id: 'g1', name: 'Kulit Pisang', type: 'organik', icon: 'fa-solid fa-apple-whole' },
            { id: 'g2', name: 'Dedaunan Kering', type: 'organik', icon: 'fa-solid fa-leaf' },
            { id: 'g3', name: 'Sisa Nasi Makan', type: 'organik', icon: 'fa-solid fa-seedling' },
            { id: 'g4', name: 'Kulit Jeruk', type: 'organik', icon: 'fa-solid fa-apple-whole' },
            
            { id: 'g5', name: 'Botol Plastik', type: 'anorganik', icon: 'fa-solid fa-bottle-water' },
            { id: 'g6', name: 'Kaleng Minuman', type: 'anorganik', icon: 'fa-solid fa-glass-water' },
            { id: 'g7', name: 'Gelas Kaca Pecah', type: 'anorganik', icon: 'fa-solid fa-whiskey-glass' },
            { id: 'g8', name: 'Kantong Kresek', type: 'anorganik', icon: 'fa-solid fa-bag-shopping' },
            
            { id: 'g9', name: 'Buku LKS Bekas', type: 'kertas', icon: 'fa-solid fa-book' },
            { id: 'g10', name: 'Kardus Makanan', type: 'kertas', icon: 'fa-solid fa-box' },
            { id: 'g11', name: 'Kertas Koran', type: 'kertas', icon: 'fa-solid fa-newspaper' },
            
            { id: 'g12', name: 'Baterai Bekas', type: 'b3', icon: 'fa-solid fa-battery-three-quarters' },
            { id: 'g13', name: 'Lampu Bohlam Pecah', type: 'b3', icon: 'fa-solid fa-lightbulb' },
            { id: 'g14', name: 'Botol Obat Nyamuk', type: 'b3', icon: 'fa-solid fa-spray-can' }
        ],
        activeItems: []
    },

    // Quiz Data
    quiz: {
        currentQuestionIndex: 0,
        score: 0,
        correctCount: 0,
        answersHistory: [], // stores whether student got question index correct or incorrect
        studentName: '',
        shuffledQuestions: [], // urutan soal & opsi jawaban yang diacak per siswa
        questions: [
            {
                question: "Di bawah ini yang merupakan sampah yang mudah membusuk dan terurai secara alami oleh tanah adalah...",
                options: [
                    "Kabel tembaga dan baterai",
                    "Botol plastik air mineral",
                    "Kulit jeruk dan dedaunan kering",
                    "Kaleng minuman bersoda"
                ],
                correctIndex: 2,
                explanation: "Kulit jeruk dan dedaunan kering berasal dari bahan organik (makhluk hidup) sehingga mudah terurai alami oleh mikroorganisme tanah."
            },
            {
                question: "Jika di kelasmu ada gelas plastik bekas es krim, tempat sampah dengan warna apa yang harus kamu pilih untuk membuangnya?",
                options: [
                    "Hijau (Organik)",
                    "Kuning (Anorganik)",
                    "Biru (Kertas)",
                    "Merah (B3)"
                ],
                correctIndex: 1,
                explanation: "Gelas plastik bekas es krim tergolong sampah Anorganik (sulit terurai alami) yang wadahnya ditandai dengan warna kuning."
            },
            {
                question: "Membawa tempat bekal dan botol minum sendiri (tumbler) ke sekolah UPT SMPN 4 Gadingrejo merupakan penerapan prinsip...",
                options: [
                    "Reduce (Mengurangi)",
                    "Reuse (Menggunakan kembali)",
                    "Recycle (Mendaur ulang)",
                    "Replace (Mengganti)"
                ],
                correctIndex: 0,
                explanation: "Membawa tumbler mengurangi pembelian air minum kemasan plastik sekali pakai, sehingga mengurangi jumlah timbulan sampah baru (Reduce)."
            },
            {
                question: "Apa kepanjangan dari singkatan sampah B3?",
                options: [
                    "Bahan Bersih Bebas Bencana",
                    "Bahan Berbahaya dan Beracun",
                    "Barang Bekas Bersama",
                    "Bahan Busuk dan Bau"
                ],
                correctIndex: 1,
                explanation: "B3 adalah singkatan resmi dari Bahan Berbahaya dan Beracun, kelompok sampah yang mengandung zat kimia berbahaya."
            },
            {
                question: "Manakah di bawah ini yang tergolong dalam kategori sampah B3 di lingkungan sekolah?",
                options: [
                    "Buku tulis bekas dan kardus LKS",
                    "Sisa roti dan kulit pisang",
                    "Baterai jam dinding bekas dan lampu TL neon rusak",
                    "Pena plastik dan botol plastik kosong"
                ],
                correctIndex: 2,
                explanation: "Baterai dan lampu neon mengandung zat kimia berbahaya (raksa/timbal) yang beracun sehingga masuk golongan B3."
            },
            {
                question: "Mengapa sampah kertas bekas ujian sekolah sebaiknya dipisahkan dari sampah sisa sayur/kuah makanan kantin?",
                options: [
                    "Agar tidak menimbulkan bau tidak sedap",
                    "Agar kertas tetap bersih sehingga mudah dan layak didaur ulang",
                    "Karena kertas bernilai lebih murah",
                    "Agar kertas bisa dimakan cacing tanah"
                ],
                correctIndex: 1,
                explanation: "Kertas yang basah dan berminyak akibat tercampur sisa makanan akan rusak strukturnya dan sangat sulit untuk diproses daur ulang."
            },
            {
                question: "Salah satu contoh kegiatan 'Reuse' (Menggunakan kembali) sampah plastik bekas di area sekolah adalah...",
                options: [
                    "Membakar botol plastik di halaman sekolah",
                    "Membuat pot bunga mini dari botol plastik bekas untuk tanaman kelas",
                    "Mengubur sampah plastik sedalam 2 meter",
                    "Membuang botol plastik langsung ke selokan air"
                ],
                correctIndex: 1,
                explanation: "Menggunakan kembali botol bekas menjadi wadah pot bunga tanpa mengubah bentuk aslinya lewat proses pabrik adalah esensi dari Reuse."
            },
            {
                question: "Waktu yang diperlukan oleh kantong plastik sekali pakai agar hancur sepenuhnya secara alami di dalam tanah adalah sekitar...",
                options: [
                    "1 - 2 tahun",
                    "5 - 10 tahun",
                    "50 - 100 tahun atau lebih",
                    "Kurang dari 1 bulan"
                ],
                correctIndex: 2,
                explanation: "Plastik terbuat dari polimer sintetis yang sangat kuat. Mikroba tanah memerlukan waktu puluhan hingga ratusan tahun untuk merombak strukturnya."
            },
            {
                question: "Di bawah ini yang BUKAN merupakan dampak negatif pembuangan sampah sembarangan adalah...",
                options: [
                    "Memicu timbulnya banjir saat curah hujan tinggi",
                    "Menjadi sarang penularan penyakit diare dan DBD",
                    "Meningkatkan kesuburan tanah di sekitarnya secara drastis",
                    "Zat kimia meresap mencemari sumber air bersih"
                ],
                correctIndex: 2,
                explanation: "Sampah non-organik/plastik yang dibuang sembarangan justru merusak porositas tanah dan membunuh mikroba penyubur tanah alami."
            },
            {
                question: "Dalam kegiatan Bank Sampah Sekolah, jenis sampah apa saja yang biasanya dapat ditabung dan menghasilkan poin/nilai?",
                options: [
                    "Sampah daun basah dan sisa kuah makanan",
                    "Sampah kertas bekas, kardus, dan botol plastik bersih",
                    "Batu bata bekas dan genting pecah",
                    "Sampah popok bayi sekali pakai"
                ],
                correctIndex: 1,
                explanation: "Bank sampah menerima sampah anorganik kering (kertas, plastik, logam) yang memiliki nilai ekonomi tinggi untuk didaur ulang."
            }
        ]
    }
};

// ==========================================
// INITIALIZATION
// ==========================================
function initApp() {
    // 1. SPA Navigation Tab Handler
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Mobile Navigation Drawer Toggle
    const navToggle = document.getElementById('navToggle');
    const appNav = document.getElementById('appNav');
    if (navToggle && appNav) {
        navToggle.addEventListener('click', () => {
            appNav.classList.toggle('open');
            const isOpen = appNav.classList.contains('open');
            navToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
    }

    // 2. Light / Dark Theme Switcher
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // 3. Load Materials Grid
    renderMaterials();

    // 4. Modal Event Listeners
    const modalClose = document.getElementById('modalClose');
    const materiModal = document.getElementById('materiModal');
    if (modalClose && materiModal) {
        modalClose.addEventListener('click', closeModal);
        materiModal.addEventListener('click', (e) => {
            if (e.target === materiModal) closeModal();
        });
    }

    // 5. Game Setup
    // Game initialization is now triggered automatically when switching to the dedicated 'Game Pilah' tab.

    // Game Reset
    const btnResetGame = document.getElementById('btnResetGame');
    if (btnResetGame) {
        btnResetGame.addEventListener('click', initGame);
    }

    // Drag-and-drop Setup
    setupDragAndDrop();

    // 6. Quiz Action Listeners
    const btnStartQuiz = document.getElementById('btnStartQuiz');
    const btnNextQuestion = document.getElementById('btnNextQuestion');
    const btnRestartQuiz = document.getElementById('btnRestartQuiz');

    if (btnStartQuiz) btnStartQuiz.addEventListener('click', startQuiz);
    if (btnNextQuestion) btnNextQuestion.addEventListener('click', loadNextQuestion);
    if (btnRestartQuiz) btnRestartQuiz.addEventListener('click', restartQuiz);

    const quizStudentNameInput = document.getElementById('quizStudentName');
    const savedStudentName = localStorage.getItem('quizStudentName');
    if (quizStudentNameInput && savedStudentName) {
        quizStudentNameInput.value = savedStudentName;
    }
}

// ==========================================
// THEME SWITCH LOGIC
// ==========================================
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    AppState.theme = theme;

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' 
            ? '<i class="fa-solid fa-sun text-yellow"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
    }
}

// ==========================================
// SPA TAB NAVIGATION SWITCH
// ==========================================
function switchTab(tabId) {
    // Deactivate current active tab contents
    const activeTabs = document.querySelectorAll('.tab-content');
    activeTabs.forEach(tab => tab.classList.remove('active-tab'));

    // Activate selected tab content
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active-tab');
    }

    // Update Navbar link state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-tab') === tabId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Close Mobile Menu on select
    const appNav = document.getElementById('appNav');
    const navToggle = document.getElementById('navToggle');
    if (appNav && appNav.classList.contains('open')) {
        appNav.classList.remove('open');
        if (navToggle) navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    // Handle special actions when switching
    if (tabId === 'game-pilah') {
        initGame();
    } else if (tabId === 'kuis') {
        // If they enter kuis, reset to intro screen
        showQuizScreen('quizScreenIntro');
    }

    // Smooth scroll back to top of main view
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global exposure for onClick inline calls in index.html
window.switchTab = switchTab;

// ==========================================
// LEARNING MATERIALS LOGIC
// ==========================================
function renderMaterials() {
    const grid = document.getElementById('materiGrid');
    if (!grid) return;

    grid.innerHTML = '';
    AppState.materials.forEach(materi => {
        const card = document.createElement('div');
        card.className = 'materi-card';
        card.innerHTML = `
            <div class="materi-card-image ${materi.gradientClass}">
                <i class="${materi.iconClass}"></i>
                <span class="materi-card-badge">${materi.category}</span>
            </div>
            <div class="materi-card-content">
                <h3>${materi.title}</h3>
                <p>${materi.shortDesc}</p>
                <div class="materi-card-footer">
                    <span class="read-time"><i class="fa-solid fa-clock"></i> ${materi.readTime}</span>
                    <button class="btn btn-secondary btn-sm" onclick="openMateri('${materi.id}')">Baca Selengkapnya</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openMateri(materiId) {
    const materi = AppState.materials.find(m => m.id === materiId);
    if (!materi) return;

    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-meta">
            <span><i class="fa-solid fa-graduation-cap"></i> ${materi.category}</span>
            <span><i class="fa-solid fa-clock"></i> ${materi.readTime}</span>
        </div>
        <div class="modal-html-content">
            ${materi.contentHtml}
        </div>
        <div class="modal-footer" style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; justify-content: center; width: 100%;">
            <button class="btn btn-primary btn-large" onclick="closeModal()"><i class="fa-solid fa-circle-check"></i> Selesai Membaca & Tutup</button>
        </div>
    `;

    const modal = document.getElementById('materiModal');
    if (modal) {
        modal.classList.add('active-modal');
        document.body.style.overflow = 'hidden'; // prevent background body scroll
    }

    // Fun burst of confetti when opening a material to attract students!
    confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 }
    });

    // Initialize interactive explorers based on content in the opened material
    if (document.querySelector('.tab-3r-btn')) init3RExplorer();
    if (document.querySelector('.dampak-card')) initDampakExplorer();
    if (document.querySelector('.step-bank')) initBankStepper();
    if (document.querySelector('.btn-kompos')) initKomposExplorer();
}

function initDampakExplorer() {
    const cards = document.querySelectorAll('.dampak-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const wasActive = card.classList.contains('active-dampak');
            
            // Remove active from all other cards to act as accordion
            cards.forEach(c => c.classList.remove('active-dampak'));
            
            if (!wasActive) {
                card.classList.add('active-dampak');
                
                // Add soft splash confetti
                confetti({
                    particleCount: 12,
                    spread: 30,
                    colors: ['#ef4444', '#f59e0b', '#10b981', '#0ea5e9'],
                    origin: { y: 0.85 }
                });
            }
        });
    });
}

function initBankStepper() {
    const steps = document.querySelectorAll('.step-bank');
    const panels = document.querySelectorAll('.step-panel');

    steps.forEach(step => {
        step.addEventListener('click', () => {
            const stepNum = step.getAttribute('data-step');

            // Deactivate all steps & activate clicked
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');

            // Deactivate all panels & activate target panel
            panels.forEach(p => {
                if (p.id === `step-panel-${stepNum}`) {
                    p.classList.add('active-panel');
                } else {
                    p.classList.remove('active-panel');
                }
            });

            // Sparkle confetti for step opened!
            confetti({
                particleCount: 10,
                spread: 20,
                origin: { y: 0.85 }
            });
        });
    });
}

function initKomposExplorer() {
    // 1. Subtab Switcher (Bahan vs Langkah)
    const btns = document.querySelectorAll('.btn-kompos');
    const panels = document.querySelectorAll('.kompos-panel');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            panels.forEach(p => {
                if (p.id === `kompos-panel-${target}`) {
                    p.classList.add('active-panel');
                } else {
                    p.classList.remove('active-panel');
                }
            });
        });
    });

    // 2. Checkboxes check animation & confetti reward
    const checkItems = document.querySelectorAll('.check-item');
    checkItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        
        // Let clicking the card toggle the checkbox
        item.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            handleCheckboxChange(checkbox, item);
        });

        checkbox.addEventListener('change', () => {
            handleCheckboxChange(checkbox, item);
        });
    });
}

function handleCheckboxChange(checkbox, item) {
    if (checkbox.checked) {
        item.classList.add('checked');
        
        // Confetti burst for checking item!
        confetti({
            particleCount: 10,
            angle: 90,
            spread: 45,
            origin: { y: 0.85 }
        });
    } else {
        item.classList.remove('checked');
    }

    // Check if ALL checked
    const totalCheckboxes = document.querySelectorAll('.check-item input[type="checkbox"]').length;
    const checkedCheckboxes = document.querySelectorAll('.check-item input[type="checkbox"]:checked').length;
    if (checkedCheckboxes === totalCheckboxes) {
        // All checked! Play a large celebration confetti
        confetti({
            particleCount: 40,
            spread: 70,
            origin: { y: 0.85 }
        });
    }
}

function init3RExplorer() {
    const tabBtns = document.querySelectorAll('.tab-3r-btn');
    const panels = document.querySelectorAll('.panel-3r');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target3r = btn.getAttribute('data-3r');
            
            // Toggle active button states
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle active panels
            panels.forEach(panel => {
                if (panel.id === `panel-${target3r}`) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // Toggle flipping cards when clicked (supports touch devices & click toggle)
    const flipCards = document.querySelectorAll('.flip-card-3r');
    flipCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const inner = card.querySelector('.flip-card-inner-3r');
            if (inner) {
                inner.classList.toggle('flipped');
            }
        });
    });
}

function closeModal() {
    const modal = document.getElementById('materiModal');
    if (modal) {
        modal.classList.remove('active-modal');
        document.body.style.overflow = ''; // restore background body scroll
    }
}

// Global exposure for onClick inline calls in dynamic materials card
window.openMateri = openMateri;

// ==========================================
// GAME: PILAH SAMPAH (DRAG AND DROP) LOGIC
// ==========================================
function initGame() {
    AppState.game.score = 0;
    AppState.game.correctCount = 0;
    AppState.game.selectedTrashId = null;

    // Pick 10 random trash items from pool to play
    const shuffled = [...AppState.game.itemsPool].sort(() => 0.5 - Math.random());
    AppState.game.activeItems = shuffled.slice(0, 10);
    AppState.game.totalItems = AppState.game.activeItems.length;

    updateGameUI();
    renderGameItems();

    const feedback = document.getElementById('gameFeedback');
    if (feedback) {
        feedback.className = 'game-feedback';
        feedback.innerHTML = 'Mulai memilah! Tarik sampah ke tong sampah yang benar.';
    }
}

function renderGameItems() {
    const pool = document.getElementById('trashItemsPool');
    if (!pool) return;

    pool.innerHTML = '';
    if (AppState.game.activeItems.length === 0) {
        // Victory!
        pool.innerHTML = `<div style="text-align:center; padding:1rem; width:100%;">
            <p style="font-size: 1.1rem; font-weight:700; color:var(--color-green-hover); margin-bottom: 0.5rem;">
                <i class="fa-solid fa-circle-check"></i> Semua sampah selesai dipilah!
            </p>
            <small class="text-light">Klik 'Reset Game' untuk bermain lagi dengan sampah lainnya.</small>
        </div>`;
        return;
    }

    AppState.game.activeItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'trash-item';
        div.id = item.id;
        div.draggable = true;
        div.setAttribute('data-type', item.type);
        div.innerHTML = `<i class="${item.icon}"></i> ${item.name}`;

        // Add visual cues on select for Mobile click fallback
        div.addEventListener('click', () => {
            // Remove selection class from other items
            document.querySelectorAll('.trash-item').forEach(el => el.classList.remove('selected-item'));
            
            if (AppState.game.selectedTrashId === item.id) {
                // Deselect
                AppState.game.selectedTrashId = null;
            } else {
                // Select
                AppState.game.selectedTrashId = item.id;
                div.classList.add('selected-item');
                
                // Alert visual helper in game feedback
                const feedback = document.getElementById('gameFeedback');
                feedback.className = 'game-feedback';
                feedback.innerHTML = `Terpilih: <strong>${item.name}</strong>. Sekarang ketuk tong sampah tujuan di bawah!`;
            }
        });

        pool.appendChild(div);
    });
}

function updateGameUI() {
    const scoreVal = document.getElementById('gameScore');
    const correctVal = document.getElementById('gameCorrect');

    if (scoreVal) scoreVal.textContent = AppState.game.score;
    if (correctVal) correctVal.textContent = `${AppState.game.correctCount} / ${AppState.game.totalItems}`;
}

function setupDragAndDrop() {
    const pool = document.getElementById('trashItemsPool');
    if (!pool) return;

    // Drag start on pool
    pool.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('trash-item')) {
            e.target.classList.add('dragging');
            e.dataTransfer.setData('text/plain', e.target.id);
        }
    });

    pool.addEventListener('dragend', (e) => {
        if (e.target.classList.contains('trash-item')) {
            e.target.classList.remove('dragging');
        }
    });

    // Setup Bins Dropzones
    const dropzones = document.querySelectorAll('.bin-dropzone');
    dropzones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const itemId = e.dataTransfer.getData('text/plain');
            if (itemId) {
                handleTrashSorting(itemId, zone.getAttribute('data-bin'));
            }
        });

        // Click-based sorting (Mobile click-fallback)
        zone.addEventListener('click', () => {
            if (AppState.game.selectedTrashId) {
                handleTrashSorting(AppState.game.selectedTrashId, zone.getAttribute('data-bin'));
                AppState.game.selectedTrashId = null; // Reset selection
            }
        });
    });
}

function handleTrashSorting(itemId, binType) {
    const itemIndex = AppState.game.activeItems.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return;

    const item = AppState.game.activeItems[itemIndex];
    const feedback = document.getElementById('gameFeedback');

    if (item.type === binType) {
        // Correct sorting!
        AppState.game.score += 10;
        AppState.game.correctCount += 1;
        
        // Remove item from active pool
        AppState.game.activeItems.splice(itemIndex, 1);
        
        feedback.className = 'game-feedback correct';
        feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Hebat! <strong>${item.name}</strong> memang merupakan sampah <strong>${item.type.toUpperCase()}</strong>. (+10 Poin)`;
        
        // Mini confetti celebration for correct sorting
        confetti({
            particleCount: 30,
            spread: 40,
            origin: { y: 0.8 }
        });

    } else {
        // Incorrect sorting!
        AppState.game.score = Math.max(0, AppState.game.score - 5); // Prevent negative score
        
        feedback.className = 'game-feedback incorrect';
        feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Oops! <strong>${item.name}</strong> bukan sampah <strong>${binType.toUpperCase()}</strong>. Ayo coba pilah ke tong yang benar. (-5 Poin)`;
    }

    updateGameUI();
    renderGameItems();

    // Check for victory
    if (AppState.game.activeItems.length === 0 && AppState.game.correctCount === AppState.game.totalItems) {
        feedback.className = 'game-feedback victory';
        feedback.innerHTML = `<i class="fa-solid fa-trophy"></i> Selamat! Kamu telah berhasil memilah semua sampah dengan sempurna! Skor Akhir: <strong>${AppState.game.score}</strong>.`;
        
        // Huge victory confetti splash
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

// Add CSS rules dynamically for selected items in mobile fallback game
const gameStyleHelper = document.createElement('style');
gameStyleHelper.innerHTML = `
    .trash-item.selected-item {
        border: 2px solid var(--color-green);
        background-color: var(--bg-green-soft);
        transform: scale(1.05);
        box-shadow: var(--shadow-md);
    }
`;
document.head.appendChild(gameStyleHelper);

// ==========================================
// KUIS INTERAKTIF LOGIC
// ==========================================
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function createSeededRandom(seed) {
    let state = seed;
    return function () {
        state = (state * 1664525 + 1013904223) & 0xffffffff;
        return (state >>> 0) / 0xffffffff;
    };
}

function shuffleWithSeed(array, randomFn) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(randomFn() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function shuffleQuestionOptions(question, randomFn) {
    const indexedOptions = question.options.map((option, index) => ({ option, index }));
    const shuffledOptions = shuffleWithSeed(indexedOptions, randomFn);

    return {
        question: question.question,
        options: shuffledOptions.map(item => item.option),
        correctIndex: shuffledOptions.findIndex(item => item.index === question.correctIndex),
        explanation: question.explanation
    };
}

function prepareQuizForStudent(studentName) {
    const normalizedName = studentName.trim().toLowerCase();
    const baseSeed = hashString(normalizedName);
    const questionOrder = shuffleWithSeed(
        AppState.quiz.questions.map((_, index) => index),
        createSeededRandom(baseSeed)
    );

    return questionOrder.map((originalIndex, displayIndex) => {
        const questionSeed = baseSeed + (originalIndex * 997) + (displayIndex * 31);
        return shuffleQuestionOptions(
            AppState.quiz.questions[originalIndex],
            createSeededRandom(questionSeed)
        );
    });
}

function getActiveQuizQuestions() {
    return AppState.quiz.shuffledQuestions.length > 0
        ? AppState.quiz.shuffledQuestions
        : AppState.quiz.questions;
}

function showQuizScreen(screenId) {
    const screens = document.querySelectorAll('.quiz-screen');
    screens.forEach(screen => screen.classList.remove('active-screen'));
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active-screen');
    }
}

function startQuiz() {
    const nameInput = document.getElementById('quizStudentName');
    const studentName = nameInput ? nameInput.value.trim() : '';

    if (!studentName) {
        if (nameInput) {
            nameInput.focus();
            nameInput.classList.add('input-error');
        }
        alert('Masukkan nama kamu terlebih dahulu agar urutan soal bisa diacak khusus untuk setiap siswa.');
        return;
    }

    if (nameInput) nameInput.classList.remove('input-error');
    localStorage.setItem('quizStudentName', studentName);

    AppState.quiz.studentName = studentName;
    AppState.quiz.shuffledQuestions = prepareQuizForStudent(studentName);
    AppState.quiz.currentQuestionIndex = 0;
    AppState.quiz.score = 0;
    AppState.quiz.correctCount = 0;
    AppState.quiz.answersHistory = [];

    showQuizScreen('quizScreenPlay');
    loadQuestion();
}

function loadQuestion() {
    const activeQuestions = getActiveQuizQuestions();
    const qIndex = AppState.quiz.currentQuestionIndex;
    const totalQuestions = activeQuestions.length;
    const currentQuestion = activeQuestions[qIndex];

    // Hide feedback container
    const feedbackBox = document.getElementById('quizAnswerFeedback');
    feedbackBox.classList.add('hidden');

    // Update Progress Details
    const questionNumberEl = document.getElementById('quizQuestionNumber');
    const currentScoreEl = document.getElementById('quizCurrentScore');
    const progressBarFill = document.getElementById('quizProgressBarFill');

    if (questionNumberEl) questionNumberEl.textContent = `Pertanyaan ${qIndex + 1} dari ${totalQuestions}`;
    if (currentScoreEl) currentScoreEl.textContent = `Skor: ${AppState.quiz.score}`;
    if (progressBarFill) {
        const percent = ((qIndex + 1) / totalQuestions) * 100;
        progressBarFill.style.width = `${percent}%`;
    }

    // Set Question Text
    const questionTextEl = document.getElementById('quizQuestionText');
    if (questionTextEl) questionTextEl.textContent = currentQuestion.question;

    // Render Option Buttons
    const optionsGrid = document.getElementById('quizOptionsGrid');
    if (optionsGrid) {
        optionsGrid.innerHTML = '';
        currentQuestion.options.forEach((option, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.innerHTML = `
                <span><span class="quiz-option-letter">${letter}</span> ${option}</span>
                <i class="fa-regular fa-circle option-state-icon"></i>
            `;
            button.addEventListener('click', () => selectAnswer(idx));
            optionsGrid.appendChild(button);
        });
    }
}

function selectAnswer(selectedIndex) {
    const activeQuestions = getActiveQuizQuestions();
    const qIndex = AppState.quiz.currentQuestionIndex;
    const currentQuestion = activeQuestions[qIndex];
    const correctIndex = currentQuestion.correctIndex;
    const optionButtons = document.querySelectorAll('.quiz-option');

    // Lock options
    optionButtons.forEach(btn => btn.classList.add('disabled'));

    const isCorrect = selectedIndex === correctIndex;
    AppState.quiz.answersHistory.push(isCorrect);

    // Style the selected option
    const clickedButton = optionButtons[selectedIndex];
    const correctButton = optionButtons[correctIndex];

    if (isCorrect) {
        AppState.quiz.score += 10;
        AppState.quiz.correctCount += 1;
        clickedButton.classList.add('correct');
        clickedButton.querySelector('.option-state-icon').className = 'fa-solid fa-circle-check text-green';
        
        // Single green pop confetti
        confetti({
            particleCount: 20,
            spread: 30,
            colors: ['#10b981', '#34d399', '#6ee7b7'],
            origin: { y: 0.8 }
        });
    } else {
        clickedButton.classList.add('incorrect');
        clickedButton.querySelector('.option-state-icon').className = 'fa-solid fa-circle-xmark text-red';
        
        correctButton.classList.add('correct');
        correctButton.querySelector('.option-state-icon').className = 'fa-solid fa-circle-check text-green';
    }

    // Update score indicator dynamically
    const currentScoreEl = document.getElementById('quizCurrentScore');
    if (currentScoreEl) currentScoreEl.textContent = `Skor: ${AppState.quiz.score}`;

    // Render Answer Explanation Feedback
    const feedbackBox = document.getElementById('quizAnswerFeedback');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    const feedbackIcon = document.getElementById('feedbackIcon');

    if (feedbackBox && feedbackTitle && feedbackText && feedbackIcon) {
        feedbackBox.className = isCorrect 
            ? 'quiz-answer-feedback correct-feedback' 
            : 'quiz-answer-feedback incorrect-feedback';
            
        feedbackTitle.textContent = isCorrect ? 'Jawaban Kamu Benar!' : 'Jawaban Kamu Kurang Tepat';
        feedbackIcon.className = isCorrect ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
        feedbackText.textContent = currentQuestion.explanation;

        // Change label on button for the final question
        const btnNext = document.getElementById('btnNextQuestion');
        if (qIndex === activeQuestions.length - 1) {
            btnNext.innerHTML = 'Lihat Hasil Kuis <i class="fa-solid fa-chart-line"></i>';
        } else {
            btnNext.innerHTML = 'Pertanyaan Berikutnya <i class="fa-solid fa-arrow-right"></i>';
        }

        feedbackBox.classList.remove('hidden');
    }
}

function loadNextQuestion() {
    AppState.quiz.currentQuestionIndex += 1;
    const activeQuestions = getActiveQuizQuestions();

    if (AppState.quiz.currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    showQuizScreen('quizScreenResult');

    const totalQuestions = getActiveQuizQuestions().length;
    const correct = AppState.quiz.correctCount;
    const scorePercent = Math.round((correct / totalQuestions) * 100);

    const resultBadgeContainer = document.getElementById('resultBadgeContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultCorrectAnswers = document.getElementById('resultCorrectAnswers');
    const resultScorePercent = document.getElementById('resultScorePercent');
    const resultMessage = document.getElementById('resultMessage');

    if (resultCorrectAnswers) resultCorrectAnswers.textContent = correct;
    if (resultScorePercent) resultScorePercent.textContent = `${scorePercent}%`;

    // Award badges based on grading
    if (scorePercent >= 90) {
        // Gold Badge - Adiwiyata Champion
        resultBadgeContainer.className = 'result-badge-container gold';
        resultBadgeContainer.innerHTML = '<i class="fa-solid fa-award"></i>';
        resultTitle.textContent = 'Luar Biasa! Kamu Pahlawan Adiwiyata!';
        resultMessage.textContent = 'Kamu memahami cara pilah & olah sampah dengan luar biasa matang. Ayo praktikkan langsung sehari-hari di UPT SMP Negeri 4 Gadingrejo!';
        
        // Huge Confetti celebration
        triggerCelebration(100);
    } else if (scorePercent >= 70) {
        // Silver Badge - Pencinta Lingkungan
        resultBadgeContainer.className = 'result-badge-container silver';
        resultBadgeContainer.innerHTML = '<i class="fa-solid fa-medal"></i>';
        resultTitle.textContent = 'Hebat! Kamu Pencinta Lingkungan!';
        resultMessage.textContent = 'Pemahaman lingkunganmu sudah cukup baik. Pelajari sedikit materi daur ulang lagi untuk menjadi yang terbaik!';
        
        triggerCelebration(50);
    } else {
        // Bronze Badge - Kadet Hijau
        resultBadgeContainer.className = 'result-badge-container bronze';
        resultBadgeContainer.innerHTML = '<i class="fa-solid fa-shield-halved"></i>';
        resultTitle.textContent = 'Ayo Tingkatkan Belajarmu!';
        resultMessage.textContent = 'Jangan menyerah! Kamu bisa membaca ulang materi 3R dan pengolahan sampah di menu "Materi" dan mencoba kuis kembali.';
    }
}

function restartQuiz() {
    startQuiz();
}

function triggerCelebration(intensity) {
    const end = Date.now() + 1000;

    (function frame() {
        confetti({
            particleCount: intensity === 100 ? 5 : 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: intensity === 100 ? 5 : 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
