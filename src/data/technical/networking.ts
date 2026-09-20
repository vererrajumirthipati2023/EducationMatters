import { TechnicalQuestion } from "./types";

export const networkingQuestions: TechnicalQuestion[] = [
  {
    id: "net-1",
    question:
      "At which layer of the OSI (Open Systems Interconnection) reference model does logical packet addressing (IPv4/IPv6) and routing occur?",
    options: [
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)",
      "Session Layer (Layer 5)",
    ],
    correctAnswer: 1,
    explanation:
      "The Network Layer (Layer 3) handles logical addressing (IP addresses), packet encapsulation, routing path determination, and forwarding across networks.",
  },
  {
    id: "net-2",
    question:
      "Which key operational characteristic distinguishes TCP from UDP at the Transport layer?",
    options: [
      "TCP is connectionless and unacknowledged, whereas UDP is connection-oriented.",
      "TCP provides reliable, ordered byte-stream delivery with congestion control and handshakes, whereas UDP is connectionless and prioritizes low latency over reliability.",
      "UDP performs packet sequencing and retransmission, while TCP does not.",
      "TCP operates exclusively at the Application layer, while UDP operates at the Physical layer.",
    ],
    correctAnswer: 1,
    explanation:
      "TCP establishes a connection via a 3-way handshake and guarantees in-order, error-checked packet delivery. UDP is lightweight and connectionless, making it ideal for streaming and real-time gaming where minimal latency is required.",
  },
  {
    id: "net-3",
    question:
      "What default TCP port numbers are standardly assigned for unencrypted HTTP and encrypted HTTPS web traffic respectively?",
    options: [
      "Port 21 and Port 22",
      "Port 80 and Port 443",
      "Port 25 and Port 110",
      "Port 53 and Port 67",
    ],
    correctAnswer: 1,
    explanation:
      "Standard unencrypted HTTP communication uses TCP port 80, while encrypted HTTPS (HTTP over TLS/SSL) uses TCP port 443.",
  },
  {
    id: "net-4",
    question:
      "What is the primary function of the Domain Name System (DNS) in computer networking?",
    options: [
      "To dynamically assign IP addresses to client hosts on a local subnet.",
      "To translate human-friendly domain names (e.g., example.com) into numerical IP addresses (e.g., 93.184.216.34).",
      "To encrypt data payloads between web clients and web servers.",
      "To manage MAC address tables inside layer-2 network switches.",
    ],
    correctAnswer: 1,
    explanation:
      "DNS acts as the internet's directory service, resolving human-readable domain names into IP addresses required by networking hardware to route packets.",
  },
  {
    id: "net-5",
    question:
      "Which protocol is primarily used on local networks to automatically configure IP addresses, subnet masks, default gateways, and DNS servers on client devices?",
    options: [
      "ARP (Address Resolution Protocol)",
      "DHCP (Dynamic Host Configuration Protocol)",
      "ICMP (Internet Control Message Protocol)",
      "SNMP (Simple Network Management Protocol)",
    ],
    correctAnswer: 1,
    explanation:
      "DHCP automates network configuration for devices using the DORA sequence: Discover, Offer, Request, and Acknowledge.",
  },
  {
    id: "net-6",
    question:
      "What is the size in bits of an IPv4 address compared to an IPv6 address?",
    options: [
      "IPv4 is 32 bits; IPv6 is 64 bits",
      "IPv4 is 32 bits; IPv6 is 128 bits",
      "IPv4 is 64 bits; IPv6 is 128 bits",
      "IPv4 is 16 bits; IPv6 is 32 bits",
    ],
    correctAnswer: 1,
    explanation:
      "An IPv4 address consists of 32 bits (4 octets in dotted-decimal format), whereas an IPv6 address consists of 128 bits (8 groups of hexadecimal digits).",
  },
  {
    id: "net-7",
    question:
      "Which network device operates primarily at the Data Link Layer (Layer 2) and uses MAC addresses to forward frames specifically to the intended destination port?",
    options: [
      "Repeater",
      "Passive Hub",
      "Network Switch",
      "Modem",
    ],
    correctAnswer: 2,
    explanation:
      "A Layer 2 Network Switch maintains a MAC address table (CAM table) to forward incoming frames only to the port connected to the destination device, reducing unnecessary traffic compared to a hub.",
  },
  {
    id: "net-8",
    question:
      "What is SSH primarily used for in network communications?",
    options: [
      "Transmitting email messages.",
      "Website development.",
      "Secure remote server access.",
      "Connecting to wireless networks.",
    ],
    correctAnswer: 2,
    explanation:
      "SSH (Secure Shell) is primarily used for secure remote server access, allowing users to log into a remote machine and execute commands securely over an unsecured network. It encrypts the communication between the client and the remote server, protecting login credentials and data from being exposed during transmission.",
  },
  {
    id: "net-9",
    question:
      "What is the main purpose of encryption in network security?",options: [
      "To encrypt viruses",
      "To protect data privacy",
      "To create user accounts",
      "To speedup the network",
    ],
    correctAnswer: 1,
     explanation:
    "Encryption converts readable data into an encoded form so that only authorised users with the appropriate key can access the original information. It helps protect sensitive data from unauthorised access and maintains data privacy during storage and transmission.",
},
  {
    id: "net-10",
    question:
      "What type of cloud computing deployment model involves a combination of on-premises, private cloud, and public cloud services.",
      options: [
      "Hybrid Cloud",
      "Public Cloud",
      "Private Cloud",
      "Community Cloud",
    ],
    correctAnswer: 0,
    explanation:
      "A hybrid cloud deployment model combines on-premises, private cloud, and public cloud services, allowing data and applications to be shared between them.",
  },
  {
    id: "net-11",
    question:
      "What is IEEE 802.11 standard commonly known as?",
      options: [
      "Wi-Fi (Wireless Fidelity)",
      "Bluetooth",
      "NFC (Near Field Communication)",
      "Ethernet",
    ],
    correctAnswer: 0,
    explanation:
      "IEEE 802.11 is commonly known as Wi-Fi (Wireless Fidelity).",
  },
  {
    id: "net-12",
    question:
      "In which physical network topology are all client nodes connected individually to a central switch or hub, ensuring that a single cable failure does not disrupt other nodes?",
    options: [
      "Bus Topology",
      "Ring Topology",
      "Star Topology",
      "Mesh Topology",
    ],
    correctAnswer: 2,
    explanation:
      "In a Star topology, all devices connect directly to a central networking device. If a single client cable breaks, only that node loses connection, leaving the rest of the network unaffected.",
  },
  {
    id: "net-13",
    question:
      "Which of the following is not a major cloud service provider?",
    options: [
      "AWS",
      "Azure",
      "Google Cloud Platform",
      "IBM",
    ],
    correctAnswer: 3,
    explanation:
      "AWS, Microsoft Azure, and Google Cloud Platform are commonly identified as the three leading hyperscale public cloud platforms. while IBM Cloud is not.",
  },
  {
    id: "net-14",
    question:
      "Which of the following is not a type of cryptography?",
      options: [
      "Symmetric Key",
      "Asymmetric Key",
      "Hashing",
      "Phishing",
    ],
    correctAnswer: 3,
    explanation:
    "Symmetric-key cryptography uses the same key for encryption and decryption, while asymmetric-key cryptography uses a pair of public and private keys. Hashing is a cryptographic technique that converts data into a fixed-length value. Phishing, however, is a social engineering attack used to trick users into revealing sensitive information and is not a type of cryptography.",
},
];
